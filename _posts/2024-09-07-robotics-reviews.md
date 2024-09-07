---
title: Embodied AI Paper Reviews
tags: robotics
date: 2024-09-07
categories: [Notes, Robotics, MachineLearning]
math: true
mermaid: true
---

# Imitation Learning

## BC-Z

## Gato

## Robocat

## RT-1

## PaLM-E

## RT-2

# Offline Reinforcement Learning

## Q-Transformer

## Conservative Q-Learning

## Decision Transformer

Limitation of the original paper:

- It seems hard to generalize to the returns that it did not see before
- The entire observation vector is converted to a single embedding
  - The embedding conversion is just a linear transformation, feel lack of the ability to project complicated states to the right place.
  - There is a paper did an ablation and found the discretization is better than using the continuous value.
    - I guess the reason is each bin could be saved into an embedding lookup table, making it more nonlinear.
- At the inference time, the latest return condition prompt = last return expectation - last reward. This could result in the latest return going to some range that the model does not see before in the training data.

  - So in general, the offline dataset basically need to cover the entire return space to perform well.

- Another thing I notice in my experiment, it randomly stitches different expert demos, but did not result in a better solution.

# Prompting-based

## Code-as-Policy

## Language to Rewards
