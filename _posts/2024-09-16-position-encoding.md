---
title: Position Encoding
tags: machine_learning
date: 2024-09-16
categories: [Notes, MachineLearning]
math: true
mermaid: true
---

# Original Fixed Sinusoid Encoding vs Learned Encoding
The original fixed sinusoid encoding proposed by the Transformer paper.

$$PE(pos, 2i) = \sin(pos / 10000^{2i / d_{model}})$$

$$PE(pos, 2i + 1) = \cos(pos / 10000^{2i / d_{model}})$$

Hypothesis is this could help model easily attend the relative positioned tokens. Since $PE(pos + k)$ is a linear transformation of $PE(pos)$, recalling that $\sin(a + b) = \sin a \cos b + \cos a \sin b$.

- The fixed encoding has almost identical performance as the learned position embedding.
- **Note**: the Transformer authors chose the fixed encoding assuming the fixed encoding **extrapolates better** on the sequence length that is **unseen** in training data.
