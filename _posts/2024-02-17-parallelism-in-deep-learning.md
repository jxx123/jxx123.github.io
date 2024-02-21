---
title: Parallelisms in Large Scale Deep Learning
tags: machine_learning
date: 2024-02-17
categories: [Notes, MachineLearning]
math: true
mermaid: true
---

- Data Parallelism
- Model Parallelism
- Pipeline Parallelism
- Tensor Parallelism

# Data Parallelism

Split non-overlapping batch of training data to multiple GPUs (GPU clusters if a model cannot fit into a single GPU) for training.

This will speed up the training significantly.

The gradients need to be reduced and synced across all the machines. The communication between GPUs and computation within GPUs are happenning at the same time.

![data-parallelism](/assets/img/blogs/2024-02-17/2024-02-17-data-parallelism.png)
_[image source](https://colossalai.org/docs/concepts/paradigms_of_parallelism/)_

# Model Parallelism

Split the big model by layers to mutlitple GPU.

The forward and backward pass needs to happen machine by machine. There is no parallel processing.

![model-parallelism](/assets/img/blogs/2024-02-17/2024-02-17-model-parallelism.png)
_[image source](https://arxiv.org/abs/1811.06965)_

[Megatron Paper](https://arxiv.org/pdf/1909.08053.pdf) about model parallelism.

# Pipeline Parallelism

Under model parallesim setup, instead of processing the entire mini batch in one GPU and then send it to the next GPU, split the mini batch into micro batches and send the micro batch to the next GPU while processing the next micro batch. This reduces the idle time of next GPUs, but there is still a bubble of idle time.

![pipeline-parallelism](/assets/img/blogs/2024-02-17/2024-02-17-pipeline-parallelism.png)
_[image source](https://arxiv.org/abs/1811.06965)_

# Tensor Parallelism

![tensor-parallelism](/assets/img/blogs/2024-02-17/2024-02-17-tensor-parallelism.png)
_[image source](https://huggingface.co/docs/text-generation-inference/en/conceptual/tensor_parallelism)_

# Optimizer-level Parallelism

[ZeRO paper](https://arxiv.org/abs/1910.02054), used by [Deep Speed](https://www.deepspeed.ai/training/)
