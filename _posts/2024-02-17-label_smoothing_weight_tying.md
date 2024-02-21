---
title: Another 2 ways of regularization, Label Smoothing and Weight Tying
tags: machine_learning
date: 2024-02-17
categories: [Notes, MachineLearning]
math: true
mermaid: true
---

# Intro

I have been implementing GPT model myself these days, and I found 2 interesting regularization techniques. One is Label Smoothing mentioned in the [transformer paper](https://arxiv.org/pdf/1706.03762.pdf). The other is [Weight Tying](https://paperswithcode.com/method/weight-tying), which is found in [nanoGPT](https://github.com/karpathy/nanoGPT/blob/eba36e84649f3c6d840a93092cb779a260544d08/model.py#L138) codebase.

![label-smoothing](/assets/img/blogs/2024-02-17-label-smoothing.png)

# Label Smoothing
