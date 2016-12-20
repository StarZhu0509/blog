---
title: Machine Learning 复习（零）：机器学习基本介绍
id: 196
categories:
  - CMU课程
  - Machine Learning
date: 2016-10-18 07:34:16
tags:
---

机器学习是基于数据的人工智能（1980s-现在），机器学习能够通过学习例子来完成任务。

### 机器学习框架

*   通常是成对出现（Input-Correct_Output）
*   机器学习的常见情况：

        *   **分类(Classification)**： 医疗诊断： 从一个输出指向一些分类；*   **回归（Regression）**：预测明天的天气：从一个输出到一个数字
    *   **逻辑回归（Logistic Regression）**: 存活几率：从一个输出到一个可能性

### 如何解决一个机器学习的问题

*   定义你的任务，考虑你的目标，比如是要决定是否允许贷款
*   考虑实际情况，比如你有多少数据，要花多少时间和努力
*   考虑输出的形式，是数字还是分类，是可能性还是一个计划
*   选择衡量表现的标准，比如损失函数或错误率
*   选择输入的形式
*   选择一系列的解决方法（假设空间）
*   选择或者设计一种学习算法

![](http://i.imgur.com/13KMImC.png)

### 机器学习和统计的关系

  从20世纪90年代中，人们开始慢慢了解统计和机器学习的关系。

*   统计：

        *   数学的分支
    *   更多考虑是否正确
    *   不太考虑计算的复杂性

*   机器学习：

        *   信息技术或者人工智能的分支
    *   更看重是否能在实际中运用
    *   不太考虑统计原理
    *   如今，两者已经有效结合了，机器学习也常常称为“统计机器学习”。