---
title: Java中的比较
tags:
  - Java
id: 240
categories:
  - Data Structure
date: 2016-11-13 05:26:48
---

### equals, == 和compareTo

*   == 操作符并不涉及对象内容的比较。
*   equals 比较的是reference，也就是引用内容
*   compareTo():
在基本数据中，compareTo()是比较两个Character 对象；
在 Boolean中，是用boolean的实例于其它实例进行比较；
在String 中，则是按照字典顺序进行比较，返回的值是一个int 型。

<pre class="editor-colors lang-text"><div class="line"><span class="text plain"><span>&nbsp;</span><span class="meta paragraph text"><span>String&nbsp;a&nbsp;=&nbsp;&quot;abc&quot;;</span></span></span></div><div class="line"><span class="text plain"><span class="meta paragraph text"><span>&nbsp;String&nbsp;b&nbsp;=&nbsp;&quot;abc&quot;;</span></span></span></div></pre>

    a == b: **true**

a.equals(b): **true**

a.compareTo(b): ** 0**

<pre class="editor-colors lang-text"><div class="line"><span class="text plain"><span>&nbsp;</span><span class="meta paragraph text"><span>String&nbsp;a&nbsp;=&nbsp;new&nbsp;String(&quot;abc&quot;);</span></span></span></div><div class="line"><span class="text plain"><span class="meta paragraph text"><span>&nbsp;String&nbsp;b&nbsp;=&nbsp;new&nbsp;String(&quot;abc&quot;);</span></span></span></div></pre>

     a == b: **false**
 这是因为，对于对象的比较是对对象引用的比较。a和b的内存地址不同，对象引用不同

 a.equals(b): **true**

 a.compareTo(b): ** 0**

*   在继承了Comparabale接口的类中，compareTo（）的应该与euqals（）一致，比如 x.equals(y) == true, 则
  x.compareTo(y) == 0

### 关于equals和hashcode

实际上，equals虽然说是表面比较是否一致，但是实际的原理是于hashcode（）方法有关的。
比如上例中的String的比较，是因为String重写了hashcode（）和equals（）
方法。

*   如果x.equals(y)返回“true”，那么x和y的hashCode()必须相等。

*   如果x.equals(y)返回“false”，那么x和y的hashCode()有可能相等，也有可能不等。

*   任何情况下，x.equals(null)，永远返回是“false”；x.equals(和x不同类型的对象)永远返回是“false”。