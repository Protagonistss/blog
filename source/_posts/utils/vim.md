---
title: vim
date: 2021-01-18 23:41:35
tags: helper
categories: vim
---

在命令模式下

```bash
e 跳到单词的末尾
w 跳到单词的首位
r + [想要替换成的字符]  比如hello 光标在h上，ra 就是把h替换成了a，也就是allo
gg 跳到第一行首位
G 跳到最后一行
o 在光标的下面新开一行
O 在光标的上面新开一行
. 执行上次的操作
```

<!--more-->

搜索

```bash
在normal模式下
"""
hello world
hello
"""
输入 /hello 按下回车 按 n 去到下一个hello的位置
```

替换

```
在normal模式下
"""
hello world
hello
"""
光标所在行替换
  替换单个
  键入 
  :s/hello/hi
  替换全部
  键入 
  :s/hello/hi/g
全文替换
键入
:%s/o/i/g
```

复制

```
复制当前行 yy
```

粘贴

```
p
```

删除

```
删除当前行 dd
删除光标选中字符 x
2dd 删除从光标（包括光标所在行）往下2行
```

撤销

```
u
```

反撤销

```
ctrl r
```

生成多个

```
在normal模式下按下100，进入输入模式 输入hello 然后esc
```

visual

```
v 选中
v0 选中到行首
ctrl + v 进入 到block 然后ctrl + d 选中到最后一行 然后想要对选中的行做操作 按下 I，输入 # 进行注释，然后再按下esc
```

help

```
help 0
help test.txt
```

