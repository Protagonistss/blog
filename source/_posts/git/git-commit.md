---
title: Git Commit的使用
date: 2019-04-28 21:39:35
tags: git
categories: git
---

#### Git-commit

- 在Git中，提交(commit)是用来记录版本库的变更。
- HEAD
  - HEAD 始终指向当前分之的最近提交。当切换分之，HEAD会更新为之乡新分支的最近提交。
- ORIG_HEAD 
  - 某些操作，比如合并和reset，会把调整为新值之前的先前版本的HEAD记录到ORIG_HEAD中。可以使用ORIG_HEAD来恢复或回滚到之前的状态或者做一个比较。
- git bisect
  - 在使用git bisect 的时候，你首先需要确定"好"提交和"坏"提交，
- git blame 
  - 可以告知我们一个文件中的每一行最后是谁修改的和哪次提交做出了变更，即当前文件的状态。
  - 参数-L，查看文件的多少行
- git diff
- git show dev:文件名
  - 显示该文件在dev分之中的状态