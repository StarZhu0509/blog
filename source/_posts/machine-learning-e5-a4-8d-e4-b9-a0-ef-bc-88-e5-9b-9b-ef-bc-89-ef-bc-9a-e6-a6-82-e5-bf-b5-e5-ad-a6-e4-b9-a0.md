---
title: Machine Learning 复习（四）：概念学习
id: 216
categories:
  - CMU课程
  - Machine Learning
date: 2016-10-19 07:35:39
tags:
---

### 概念学习（Concept Learning）

概念学习是指从某个布尔函数的输入输出训练中推断出该布尔函数。

##### 例子

为了更好地理解概念学习，我们从机器学习经典教材《Machine learning》（Tom Mitchell著）中的经典例子来解释：
![](http://i.imgur.com/0SnpShX.png)

我们可以看到，属性EnjoySport表示最终是否运动，而这个任务的目标是根据sky，humidity等的属性来预测出EnjoySport的值。

*   属性的取值可以为：

        *   ？：表示可以接受任意值
    *   明确指定属性值（如warm）
    *   不允许任何值：![](http://i.imgur.com/Sy3EXiV.png)

所以对于EnjoySport这个任务：

*   已知：

    *   实例集 X：可能的日子，每个日子都有如下属性描述：

                *   Sky
        *   Temp
        *   Humid
        *   Wind
        *   Water
        *   Forecast

    *   假设集： H。每个假设集都有6个属性的任意取值。
    *   目标概念c：EnjoySport： ![](http://i.imgur.com/uGkb5OB.png)
    *   训练实例 D： +/-的关于目标概念的例子：
![](http://i.imgur.com/nOw2ffI.png)
    *   归纳学习假设： 如果一个假设能够在训练集样本中很好地逼近目标函数，就能在未见实例中很好地逼近目标函数。
![](http://i.imgur.com/vDaItGC.png)
    *   Find-S 算法：
    *   初始化H到最特别的那个假设
    *   对于每一个训练实例X中的约束ai：

                *   如果ai已经符合假设，什么也不做。
        *   否则，用一个更加general的约束来代替H中的ai

        *   输出最终的假设 H
![](http://i.imgur.com/hMNrVw1.png)
    *   Find-S 算法仍然存在一些没有解决的问题：

            *   难以判断是否对概念进行了学习
        *   是否能处理不一致的训练数据：在实际中，训练数据常常出现错误。这种不一致可能会严重破坏Find-S算法，因为Find-S算法忽略了所有的反例。我们期待的算法至少要能检测出训练数据的不一致性，并能容忍这样的错误。
        *   为什么要用特殊假设？如果有多个，此算法只能找到最特殊的那个。为什么我们不用最一般的假设呢，或者两者之间的假设。
        *   如果有多个极大特殊假设？在其他一些假设空间（后面会讨论到）中，可能有多个极大特殊假设。

        *   变形空间（Version Spaces):
所有和数据集以及假设表示对应的假设的集合。我们可以看到，在Find-S中，最终输出的假设可能只是H中与训练样例一致的多个假设之一。
    *   列表后消除算法（List-Then-Eliminate）：

            *   先把变形空间设置为所有假设的列表
        *   对于每一个样例，我们排除假设中和样例不符合的情况。
        *   输出变形空间中的所有假设。

        *   一般边界（General boundary）： 表示在H中与D相一致的极大一般成员的集合。
    *   特殊边界（Specific Boundary）：表示在H中与D相一致的极大特殊成员的集合。
    *   所有的变形空间都在这两个边界之间：
![](http://i.imgur.com/n0uBYdt.png)

### 回到enjoy sport的例子

![](http://i.imgur.com/0SnpShX.png)
我们来梳理一下：

*   输入空间： X={sky(cloudy/sunny/rainy),Temp=(warm/cold),Humid=(Normal/high),Wind=(Strong/weak),water=(warm/cool),forecast=(same/change)}
所以一共是 = 3_2_2_2_2*2 =96
*   概念空间（Concept Space）：
对于每一个输入，都有正例反例两种可能的概念。
所以概念空间为2^96
*   假设空间：把每种情况包含all这个选项，相乘=4_3_3_3_3*3+1=973.这里加的1表示的是全否的情况。

### 归纳偏置(Inductive Bias)

机器学习试图去建造一个可以学习的算法，用来预测某个目标的结果。要达到此目的，要给于学习算法一些训练样本，样本说明输入与输出之间的预期关系。然后假设学习器在预测中逼近正确的结果，其中包括在训练中未出现的样本。既然未知状况可以是任意的结果，若没有其它额外的假设，这任务就无法解决。这种关于目标函数的必要假设就称为归纳偏置（Mitchell, 1980; desJardins and Gordon, 1995）。

参考：
《机器学习》（Tom Mitchell）