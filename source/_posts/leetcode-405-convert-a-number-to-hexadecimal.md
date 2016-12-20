---
title: '[LeetCode 405] Convert a Number to Hexadecimal'
tags:
  - Easy
  - LeetCode
id: 152
categories:
  - LeetCode
date: 2016-10-15 04:23:44
---

Question:

 ** Given an integer, write an algorithm to convert it to hexadecimal. For negative integer, two’s complement method is used.**

Note:
All letters in hexadecimal (a-f) must be in lowercase.The hexadecimal string must not contain extra leading 0s. 
If the number is zero, it is represented by a single zero character '0'; otherwise, the first character in the hexadecimal string will not be the zero character.
The given number is guaranteed to fit within the range of a 32-bit signed integer.
You must not use any method provided by the library which converts/formats the number to hex directly.

本题大意是把一个整数转成十六进制。

首先要考虑负数的情况，提示中说了可以用  [two's complement](https://en.wikipedia.org/wiki/Two%27s_complement)来实现。

**关于 `two's complement`**:

（ _此处为自己这学期最终没有选15213表示忏悔，找个时间总结下课程_）

   Two's complement 就是使用二进制补码原理来消除带符号数和无符号数计算差异，把减法运算器整合到加法中。

   由于硬件设计中，对减法的处理较为麻烦，所以选择不对符号进行处理，也就是采用了补码的形式。

   即`x = pow(2, word_length) - abs(x)`，这是个补码的简单计算方法。

   以4位字长的寄存器为例子：

       7 - 6 = 7 + (16 -10) - 16 
    `</pre>

       16是4位寄存器的最小溢出数，我们可以看看CPU是如何计算的

    <pre>`     0 1 1 1 （7）
       + 1 0 1 0 （10）
        1 0 0 0 1（17）
    `</pre>

       由于只存4位字长，第五位溢出的“1”就被去掉了，只剩下 0001，即1。

       所以回归本题：

       Python Solution:

    <pre>`def toHex(self, num):

        """

        :type num: int

        :rtype: str

        """

        res = ""

        dict = {10:'a',11:'b',12:'c',13:'d',14:'e',15:'f'}

        if num ==0:

            return "0"

        if num &lt; 0:

            num = 16 ** 8 + num

        while num &gt; 0:

            tail = num%16

            print "tail",tail

            if tail &lt; 10:

                res = str(tail) + res

            if tail &gt;= 10 and tail &lt; 16:

                res = dict[tail] + res

            num = num/16

        return res
    `</pre>

       好了，上面是我自己的蠢办法。

       和梦瑶交流了一下，她给我解释了一下位运算，然后她的方法是右移...真是越理解计算机原理，程序会越快...她的Java版本：

    <pre>`public String toHex(int num) {
        if(num == 0)
            return "0";
        char[] digit = new char[]       {'0','1','2','3','4','5','6','7','8','9','a','b','c','d','e','f'};
        StringBuilder s = new StringBuilder();
        for(int i=0;i&lt;8 &amp;&amp; num!=0;i++) {
            int b = num &amp; 15;
            char c = digit[b];
            s.insert(0, c);
            num = num &gt;&gt; 4;
        }
        return s.toString();
    }
    