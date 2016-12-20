---
title: Machine Learning 复习 (一)：概率统计和线性回归
tags:
  - '10601'
  - CMU
  - MachineLearning
  - Statics
id: 172
categories:
  - CMU课程
  - Machine Learning
date: 2016-10-17 08:54:30
---

Machine Learning 总结

### Probability and Statistics

*   常规变量（Regular variables）应该是数字或者是其他。相反，随机变量（Random Variables）是一系列值得分部。 比如，扔一枚硬币是随机变量X的如下分布，‘Head’可能性为0.5，‘Tail’可能性为0.5.

*   一般我们用大写字母表示随机变量，用小写字母表示随机变量取的值。
![](http://i.imgur.com/pDKvACY.png)

*   链式法则：
![](http://i.imgur.com/4mhM7ZX.png)
*   独立事件：
![](http://i.imgur.com/OW5IlLd.png)
*   数学期望E：
![](http://i.imgur.com/cnOMht3.png)

    *   性质：

            *   线性表达：
![](http://i.imgur.com/umYck9X.png)
        *   在不假定任何X和Y的关系条件下：
![](http://i.imgur.com/oIUCHhI.png)

*   方差：

Var[X] = E[(X − E[X])2]
![](http://i.imgur.com/nMY4vIP.png)

*   标准差：
![](http://i.imgur.com/eDUZuou.png)

*   X,Y的协方差：
![](http://i.imgur.com/H8fkuCv.png)

*   方差，标准差，协方差的一些性质：
![](http://i.imgur.com/K1fjJc8.png)

*   总方差定律（The law of total variance）:
![](http://i.imgur.com/kEzg3MB.png)

*   线性相关（通常被简称为 相关）：

    *   属于[-1，1]
![](http://i.imgur.com/5DyzoXH.png)
    *   相关性在变量的移动和范围变化中常常是保持不变的
![](http://i.imgur.com/CNoMJ92.png)

        *   如果X，Y互相独立，那么线性相关性为0，但是反之不可以。即X，Y可能线性不相关，但是依旧不是独立的。
所以结论只能是：
   独立 -&gt; 线性不相关，反之不可。

### Correlation vs. Mutual Information

*   Mutual Information 的定义（可参见另一篇博客【现在没有哈哈】：Machine Learning信息论复习）：

*   线性相关性需要x，y的值都是数字，所以两者之间存在距离概念---度量空间（metric space）。

    *   度量空间，可以用来衡量线性相关的程度和紧密度（tightness）。

        *   对于binary的随机变量，认为变量拥有两个数值，0和1。范围也是[-1，1]。大多数情况下，我们更加在意相关的强度，而非反向性（polarity）。所以我们会观察![](http://i.imgur.com/snCouQg.png) 的情况，其范围为[0,1]

*   相反，Mutual Information 不需要度量空间。
 ![](http://i.imgur.com/Nzz5md8.png)

*   Mutual Information I（X;Y）很大但是相关性为0的例子:

    *   一个完美的多边形，顶点的线性相关性永远为0，但是当定点个数趋向无穷，I（X；Y）也会趋向无穷。

                *   最小的例子：等边三角形
        *   来思考一个分布均匀的正方形，当你旋转它的时候，相关性不变，但是I会随着旋转而变化。当旋转到和轴平行时，I减小了。
![](http://i.imgur.com/0VfYmLq.png)

*   Mutual Information 为0但是相关性不为0的例子：

    *   没有。因为I（X；Y）=0 意味着X，Y是独立的，所以相关性一定为0。

### Linear Learning in One Dimension(Simple Linear Regression)

*   我们在这里考虑的是一种Mapping X-&gt;Y.X作为输入会给出，我们更倾向于了解P（y|x）而不是P（x，y）。简单来说，我们想知道在给定x的情况下y的期望值。即，E[Y|X=x]，更简单来说，我们假设X和E[Y]符合一种线性关系：
 ![](http://i.imgur.com/FtpiBMl.png)
 或者说是：
 ![](http://i.imgur.com/79iWQIz.png)
*   β是斜率，α是截距，ε是零均值分布。（好了好了这个中学就学过了。）
*   对于给定的斜率和截距，我们可以得到一条线，然后计算一下误差。
![](http://i.imgur.com/cHM6aMP.png)
 实际上，这种误差并不代表错误，只是预测值和真实值之间的差距.
*   一种找到这些参数的方法是最小化残差平方， 这里假设误差是Guassion（也就是正态分布）的。
 ![](http://i.imgur.com/ElJtZHe.png)
 有一种相近解法：
 ![](http://i.imgur.com/MlB77DE.png)

### Linear Learning in Multiple Dimensions

*   如果X不止一个比如：
![](http://i.imgur.com/vHnaG1o.png)
*   我们同样可以假设线性关系：
![](http://i.imgur.com/ppDgVx1.png)
*   为了简化符号，我们可以假设β0=α，同时x0=1。就得到了如下模型：
![](http://i.imgur.com/LOlkLBu.png)
*   我们可以把数据集用矩阵表示
![](http://i.imgur.com/gx7nN0Q.png)
*   留存可以计算为：
![](http://i.imgur.com/07n1cTT.png)
*   和上面的一样，我们同样需要计算出最小化残差平方：
![](http://i.imgur.com/8r1EA7v.png)
或者一种近似解法：
![](http://i.imgur.com/ojQx65w.png)