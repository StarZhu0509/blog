---
title: '[LeetCode 172 Easy]Factorial Trailing Zeroes'
tags:
  - Easy
  - LeetCode
  - Math
  - Python
id: 145
categories:
  - LeetCode
date: 2016-10-15 02:19:35
---

   Question:

    Given an integer n, return the number of trailing zeroes in n!.
    `</pre>

      题意是求n的阶乘后面0的个数。

      **Basic Solution **

      直接硬求n!的结果,再计算末尾0的个数，如果n过大，结果会溢出。

      **Better Solution **

      `Complexity` : O(lgn)

      后缀为0的都是2和5相乘得到的，只需要计算2和5的个数。

      但是例如：

    <pre>`  n = 5! = 1 * 2 * 2 * 2 * 3 * 5 有3个2，1个5
      n = 7! = 1 * 2 * 3 * 2 * 2 * 5 * 2 * 3 * 7 有4个2，1个5
    `</pre>

      可以看出，2会远远比5多，我们只需要计算有5的个数就可以了。但是要注意：

    <pre>`  n = 25! 不止2个5，而是3个5，因为25 = 5 * 5
    `</pre>

       所以

    <pre>`  result = n/5 + n/25 + n/125....
    `</pre>

       Python Solution:

    <pre>` 

      class Solution(object):
           def trailingZeroes(self, n):
               num, x = 0, 5
               while n &gt;= x:
                  num += n/x
                  x *= 5
               return num

    