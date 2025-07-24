---
title: Register Buffer 
tags: Pytorch
date: 2024-07-21
categories: [Notes]
math: true
mermaid: true
---

# What does Pytorch `register_buffer` do?
- `register_buffer` saves the parameters in `state_dict`, but no gradients will be computed (hence no updates).
  - `model.parameters()` will not return the params saved by `register_buffer`.
  - Examples: 
    - `running_mean`, `running_std` in Batch Norm
    - `mask` in causal self attention block in Transformer.
- Since it is in `state_dict`, you will not lose it by save and load the models.
- `register_parameter` will save the parameters in `state_dict` and will be updated by backprop.
  - It is equivalent to `self.my_param = nn.Parameter(torch.randn(10))`.




References:
- [https://discuss.pytorch.org/t/what-is-the-difference-between-register-buffer-and-register-parameter-of-nn-module/32723](https://discuss.pytorch.org/t/what-is-the-difference-between-register-buffer-and-register-parameter-of-nn-module/32723)
- [https://stackoverflow.com/questions/57540745/what-is-the-difference-between-register-parameter-and-register-buffer-in-pytorch](https://stackoverflow.com/questions/57540745/what-is-the-difference-between-register-parameter-and-register-buffer-in-pytorch)