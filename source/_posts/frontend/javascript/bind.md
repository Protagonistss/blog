---
title: Bind、Call、Apply
date: 2020-01-08 14:52:54
tags: jsApi
categories: javascript
---

### Bind、Apply、Call的区别

相同点就是这三个方法都可以改变函数的this指向，不同点是call，apply是修改函数作用域，修改this指向，并且立即执行。bind是返回一个新的函数,并不会立即执行，若想立即执行需要在后面加上()调用，当然关于传入的参数也有一定的差异，call和bind可以接受多个单个的参数，apply 接受的参数形式是数组。

