---
title: Mixed precision training
tags: machine_learning
date: 2024-02-17
categories: [Notes, MachineLearning]
math: true
mermaid: true
---

# Why mixed precision
Benefits:
- Faster in modern GPUs that support half-precision (FP16, BFLOAT16) arithmetic. 
  - Check the [A100 specs](https://www.nvidia.com/content/dam/en-zz/Solutions/Data-Center/a100/pdf/nvidia-a100-datasheet-us-nvidia-1758950-r4-web.pdf): FP32 has 19.5 TFLOPS, while FP16 has 312 TFLOPS, 15x faster.
- Save 50% memory.

Challenges:
- Narrower range, lower precision than FP32
- Gradients could underflow or overflow, leading to training instability.

## Why not FP16 everywhere?
- Some operations, e.g. loss computation, reduction operation (sum, mean), gradient computation that requires accumulation (again reduction-like ops), require higher precision. Using FP16 everywhere could make the training unstable (lots of Inf or NaN).

When to use FP16 and FP32?
- FP32 master weights: model weights are saved in FP32
- FP16 copies for computation: forward pass uses FP16 for computation. 
- FP16 is also used in backward pass, except the gradient accumulation stage. The accumulation stage will cast FP16 to FP32 before accumulation.
- Operations that are kept in FP32:
  - Loss Computation
  - Reduction Operations
  - Normalization Layers: batch norm, layer norm

`autocast` in Pytorch decides whether casting to FP16 or not.

# Grad Scaler
- Loss Scaling: Scales up the loss value to prevent gradients in FP16 from underflowing to zero.
- Gradient Unscaling: After backpropagation, scales down the gradients to match the original scale.
- Dynamic Adjustment: Automatically adjusts the scaling factor to balance between preventing underflow and avoiding overflow.
