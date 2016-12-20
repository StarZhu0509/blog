---
title: Machine Learning 复习（二）：信息论
id: 193
categories:
  - CMU课程
  - Machine Learning
date: 2016-10-18 05:14:33
tags:
---

### Informaiton

*   信息 ！= 知识
*   信息用来减少不确定性
*   当我们得知E事件发生，意味着我们得到了

![](http://i.imgur.com/d6puw09.png)

bits的信息。

    *   其中log的底数并不重要，我们假设为2.
    *   这也可以认为这个表示了事件E的“惊喜”数量。
    *   例如抛一枚硬币得到的信息是：![](http://i.imgur.com/xCAfm06.png)
    *   抛一枚骰子得到的信息是：
![](http://i.imgur.com/3qhzEa5.png)

*   信息熵（Entropy）用来度量随机变量的不确定性![](http://i.imgur.com/vhNudZf.png)

![](http://i.imgur.com/hMmPF6t.png)

<pre class="editor-colors lang-text"><div class="line"><span class="text plain"><span class="meta bullet-point star text"><span>&nbsp;</span><span class="punctuation definition item text"><span>*</span></span><span>&nbsp;代表的是观察S事件来源所能得到的平均信息量。</span></span></span></div><div class="line"><span class="text plain"><span class="meta bullet-point star text"><span>&nbsp;</span><span class="punctuation definition item text"><span>*</span></span><span>&nbsp;代表的是观察一个特征所得到的平均“惊喜”量。</span></span></span></div><div class="line"><span class="text plain"><span class="meta bullet-point star text"><span>&nbsp;</span><span class="punctuation definition item text"><span>*</span></span><span>&nbsp;在观察一个特征之前的不确定性。</span></span></span></div><div class="line"><span class="text plain"><span class="meta bullet-point star text"><span>&nbsp;</span><span class="punctuation definition item text"><span>*</span></span><span>&nbsp;根据Shannon定律，当你用code来传递信息时，最低的limit是code的efficiency不能低于Entropy。</span></span></span></div></pre>
*   信息熵的特性：

    *   不为负。
    *   概率越大，自信息量越小
    *   设K是系统内的信息总数，则
![](http://i.imgur.com/Dq8RQVR.png)当p=1/k,即事件概率相等时，系统S的熵最大。

*   联合熵：

    *   通过举例来说明：
![](http://i.imgur.com/cJLL1eO.png)

            *   如图，H（T）= H（0.3，0.5，0.2）=1.48548
H(M)=H(0.6,0.4)=0.970951
H(T)+H(M)=2.456431
        *   而联合熵则表示为：
![](http://i.imgur.com/fXwGoZd.png)

        可以看出：
![](http://i.imgur.com/bRTkMLK.png)
当X，Y在统计学上互相独立时，等号成立。

*   条件熵（Conditional Entropy）;
P(T=t|M=m):
![](http://i.imgur.com/FGzAOEu.png)
![](http://i.imgur.com/yIkhyGa.png)

    *   平均条件熵：
 ![](http://i.imgur.com/CJsv6Xz.png)

            *   那么M（cold/mild/hot）能告诉我们多少关于T的信息呢？
![](http://i.imgur.com/7Hgqpdo.png)

        同理，我们也可以观察T能告诉我们多少和M有关的信息：
![](http://i.imgur.com/xbxyZyg.png)

*   平均互信息：
 ![](http://i.imgur.com/XqcI5yk.png)

    *   性质：

                *   对称性：也就是说对于X和Y，平均互信息都是I（X；Y）
        *   不为负： 但是H(X) − H(X/y) 可能为负
        *   如果X，Y是独立的，就是0
        *   可相加的
        *   ![](http://i.imgur.com/2L2g7mM.png)

*   对于三个信息源：
 ![](http://i.imgur.com/DMMhYMM.png)
*   马尔科夫链（Markov Source）:
马尔可夫链描述了一种状态序列，其每个状态值取决于前面有限个状态。马尔可夫链是具有马尔可夫性质的随机变量的一个数列。这些变量的范围，即它们所有可能取值的集合，被称为“状态空间”，而  的值则是在时间n的状态。如果![](http://i.imgur.com/kHK3e83.png)对于过去状态的条件概率分布仅是  的一个函数，则 ![](http://i.imgur.com/xBCVgwp.png)