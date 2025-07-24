---
title: Weight Initialization in Deep Neural Networks
tags: machine_learning
date: 2024-09-16
categories: [Notes, MachineLearning]
math: true
mermaid: true
---

# Motivation

When the neural nets go deeper (larger layer size), it is important to prevent gradient vanishing or exploding. So we need to keep an eye of the variance of the output of each of the layers. The principal is to keep the variance of the outputs of layers unchanged with the layer number.


# Xavier initialization and Kaiming initialization

- Xavier initialization is useful for **symmetric** activations, e.g. sigmoid, tanh etc.
- Kaiming initialization is useful for **ReLu-like asymmetric** activations.


# Final Notes
- For very deep networks, Xavier or Kaiming initialization might not be enough to stablize training. Techniques like **Batch Normalization** are often used together as well.
- Learning Rate Scheduling. This is also necessary to ensure smooth convergence.


