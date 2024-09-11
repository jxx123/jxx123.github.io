---
title: General-Purpose Robot Roadmap
tags: robotics
date: 2024-09-07
categories: [Notes, Robotics, MachineLearning]
math: true
mermaid: true
---

# Good Enough Prior

Goal: achieve baby-level of control of the body and is capable of doing fundamental instruction following.

- This could significantly narrow down the search space for the following RL algorithms.
- At least know simple line of "move your right arm a bit higher to reach the shelf", and has good enough knowledge to convert this instruction to making-sense movements (does not need to be perfect).
  - This makes the robot in-context learning ready.
- LLM or VLM has already has good amount of world knowledge (much better than babies), but it has poor knowledge to connect the high-level concept to low level controls.
- Collecting more diverse low-level control data helps building this prior, e.g. RT-X datasets.
- There is a grand challenge that how to design a most sample efficient and automatic data collection process (human may or may not in the loop). Example: Auto-RT.

# In-context Learning or Real-time Reinforcement Learning to combat OOD situations.

- There is always Out-of-Distribution scenarios, since the training data never covers everything.
- Robots need to quickly adapt to unseen tasks, either from vision demonstration, handholding (teleop) intervention.
  - Example: learning to learn faster paper, but it is not end-to-end, it is limited to code-as-policy realm.
  - It is not that code-as-policy is not great. Code-as-policy has a shorter feedback loop to build up the low-level control knowledge of LLM. However, you also miss the opportunity to fine-tune the low-level controls, e.g. a MPC policy could be very stiff and unnatural even though it might still achieve most of the desired trajectories, etc.

# Practice makes perfect

- The training data for behavior cloning is often suboptimal.
- We need to let robot to perform self-play Reinforcement Learning to reach optimal (or better than training) performance.
  - Current Reinforcement Learning techniques still need lots of manual reward function tuning. Leveraging the existing LLM / LVM is a potential direction to automate the reward construction. LLM should be able to figure out some trivial rewards. More sophisticated reward modeling could be difficult problem (checkout the alignment research nowadays).
