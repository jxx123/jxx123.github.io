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

- Did not evaluate generalization to new tasks.
- Limited real-world data and evaluation.

## Robocat

## RT-1

- It has its own action tokenization. It discretized each action dimension into 256 bins (7 dimensions for th robot in the paper).
- It has a key insight that using continuous actions reduces the success rate by a lot.
  - Gaussian distribution in continous action set up is limited to a single-modal distribution.
- Adding history observations matter.
- Trajectory ${x_j, a_j}^T$, there is only a binary reward of success or not in the end.
- Token Learner compresses large number of tokens to smaller number of tokens.
  - This makes the inference feasible on robot.
- 3-10 Hz response latency.

## PaLM-E

## RT-2

- 55B.
- It uses the language token space. Either by outputting string (integers) directly, or swap the 256 least used text tokens.
- Co-Fine-Tuning: train with both robotics data and the orginal web data.
- Constrain the output token range when we really need the robot actions.
- The net gains are from unseen objects / backgrounds / environments.
  - This is a very straightforward area of improvements.
- This model is big and slow (plus sitting on the cloud), not that practical in actual robots.

## RT-X

- RT-1-X outperforms RT-1 (trained with the specific task data).
- RT-1 architecture underfits on large dataset.
- Unseen objects, backgrounds and environments: RT-2 and RT-2-X performs the same.
- RT-2-X is able to perform tasks in Bridge much better even if it is cross-embodiment data.
- RT-2-X without Bridge data still outperforms RT-2.

- Cross Embodiment works!
- And it helps the specialist model as well!!
- It means let's go for the multi-task-multi-embodiment data collection.
- Datasets need combine both scale and breadth
- Dataset needs to be sufficiently well-connected to enable generalization.
- 22 robot embodiments, but it seems the datasets are all robot arms with 7 DOFs.

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

### Learning to Learn faster

- Daytime in-context-learning based on instruction.
- Nighttime, fine-tune and update the weights.
