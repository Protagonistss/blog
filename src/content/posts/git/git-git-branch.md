---
title: "Git 基本操作指南"
description: "详细介绍 Git 的 add、branch、commit 等基本操作，包括分支管理和上游分支设置"
pubDate: "2019-04-28T22:26:24.000Z"
tags: ["git"]
categories: ["git"]
draft: false
---

# Git 基本操作指南

本文介绍 Git 的常用基本操作，包括文件添加、分支管理和提交操作。

## 一、文件添加 (add)

Git 的 `add` 命令用于将文件添加到暂存区，为提交做准备。

```bash
# 添加所有文件到暂存区
git add .

# 添加已被 Git 管理的文件到暂存区（不包括新文件）
git add -u

# 添加指定文件到暂存区
git add filename.txt

# 交互式添加文件
git add -i
```

## 二、分支管理 (branch)

分支是 Git 的核心功能之一，允许并行开发不同的功能。

### 基本分支操作

```bash
# 创建新分支
git branch <branch-name>

# 创建并切换到新分支
git checkout -b <branch-name>

# 列出所有分支
git branch

# 列出所有分支（包括远程分支）
git branch -a

# 删除分支
git branch -d <branch-name>

# 强制删除分支
git branch -D <branch-name>
```

### 从指定提交创建分支

```bash
# 语法：git branch <new-branch> <starting-commit>
git branch new-feature d25bdb13539c9d584a434cc47da864fe49afd826

# 示例说明：
# new-feature: 要创建的新分支名
# d25bdb13539c9d584a434cc47da864fe49afd826: 指定从该提交创建新分支
```

### 上游分支设置

上游分支（upstream branch）是本地分支对应的远程分支，设置后可以简化推送和拉取操作。

#### --set-upstream-to 用法（推荐）

```bash
# 为当前分支设置上游分支
git branch --set-upstream-to=origin/main

# 为指定分支设置上游分支
git branch --set-upstream-to=origin/dev feature-branch

# 查看所有分支的上游分支信息
git branch -vv
```

#### --set-upstream 用法（已废弃）

```bash
# 旧版本的设置上游分支方式（不推荐使用）
git branch --set-upstream origin/main
```

#### 实际应用场景

```bash
# 场景1：本地分支与远程分支关联
git checkout -b feature-branch
git branch --set-upstream-to=origin/feature-branch

# 场景2：切换分支后重新设置上游
git checkout main
git branch --set-upstream-to=origin/main

# 场景3：推送时自动设置上游（推荐方式）
git push -u origin feature-branch
# 等同于：
git push origin feature-branch
git branch --set-upstream-to=origin/feature-branch
```

#### 注意事项

- `--set-upstream` 已被废弃，建议使用 `--set-upstream-to`
- 使用 `git push -u` 是设置上游分支的推荐方式
- 设置上游分支后，可以直接使用 `git pull` 和 `git push` 而不需要指定远程分支名

## 三、提交管理 (commit)

提交是 Git 中记录版本库变更的基本单位，每个提交都包含一个快照和相关的元数据。

### 基本提交操作

```bash
# 提交暂存区的文件
git commit -m "提交信息"

# 提交所有已跟踪的文件（跳过暂存区）
git commit -am "提交信息"

# 修改最后一次提交
git commit --amend

# 查看提交历史
git log

# 查看提交历史（简洁版）
git log --oneline
```

### Git 重要概念

#### HEAD

HEAD 是一个指向当前分支最新提交的指针。

- HEAD 始终指向当前分支的最近提交
- 当切换分支时，HEAD 会更新为指向新分支的最近提交
- HEAD~1 表示上一个提交，HEAD~2 表示上两个提交

#### ORIG_HEAD

ORIG_HEAD 记录了某些操作执行前的 HEAD 位置。

- 某些操作（如合并、reset）会将操作前的 HEAD 记录到 ORIG_HEAD
- 可以使用 ORIG_HEAD 来恢复或回滚到之前的状态
- 用于比较操作前后的差异

### 高级提交操作

#### git bisect（二分查找）

用于快速定位引入问题的提交。

```bash
# 开始二分查找
git bisect start

# 标记当前提交为"坏"提交
git bisect bad

# 标记某个提交为"好"提交
git bisect good <commit-hash>

# 结束二分查找
git bisect reset
```

#### git blame（代码追溯）

查看文件中每一行的最后修改者和提交信息。

```bash
# 查看文件的每一行修改信息
git blame filename.txt

# 查看指定行范围的修改信息
git blame -L 10,20 filename.txt

# 查看指定行数的修改信息
git blame -L 10 filename.txt
```

#### git diff（差异比较）

比较不同版本之间的差异。

```bash
# 比较工作区与暂存区的差异
git diff

# 比较暂存区与最新提交的差异
git diff --cached

# 比较两个提交之间的差异
git diff commit1 commit2

# 比较工作区与指定提交的差异
git diff HEAD
```

#### git show（查看提交详情）

查看提交的详细信息和文件变更。

```bash
# 查看最新提交的详细信息
git show

# 查看指定提交的详细信息
git show <commit-hash>

# 查看指定分支中文件的状态
git show dev:filename.txt

# 查看指定提交中文件的状态
git show <commit-hash>:filename.txt
```

## 总结

本文介绍了 Git 的三个核心操作：

1. **add**：文件添加到暂存区
2. **branch**：分支管理和上游分支设置
3. **commit**：提交管理和版本控制

掌握这些基本操作是使用 Git 进行版本控制的基础。建议在实际项目中多加练习，逐步熟悉各种命令的使用场景。

