---
title: python remove误区
id: 103
categories:
  - 技术冷板凳
date: 2016-09-19 03:58:35
tags:
---

在list里面边查找边remove，会出错。 因为这个原因Debug了一个早上真是哭瞎。

	原来是：

<pre>
`for h in total_h:
    if attr_value_list not in h:
       total_h.remove(h)
`</pre>

	但结果始终错误，跑不出分。

	调用remove后，index改变了。

	所以改成了如下，先把要remove的存在新的list里面，再遍历list去掉。

<pre>
`for h in total_h:
    new_h = []
    if attr_value_list not in h:
       for x in h:
           new_h.append(x)
       remove_list.append(new_h)
for r in remove_list:
    total_h.remove(r)
`</pre>

	&nbsp;