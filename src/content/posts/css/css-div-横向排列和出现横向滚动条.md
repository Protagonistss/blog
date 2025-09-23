---
title: "Div横向排列和出现横向滚动条"
description: ""
pubDate: "2019-04-30T13:26:42.000Z"
tags: ["css"]
categories: ["css"]
draft: false
---


##### 出现横向滚动条

核心思路是使用`white-space` 这个属性防止父容器内容换行，例子如下:

~~~html
<ul>
	<li></li>
	<li></li>
  <li></li>
  <li></li>
  <li></li>
</ul>

<style>
ul{
  width: 100%;
  overflow-x: scroll;
  overflow-y: hidden;
  white-space: nowrap;
}
ul li{
  display:inline-block;
  box-sizing: border-box;
}
</style>

~~~

