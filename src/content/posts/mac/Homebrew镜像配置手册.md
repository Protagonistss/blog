---
title: "Homebrew 镜像配置操作手册"
description: "macOS 上配置 Homebrew 使用清华大学 TUNA 镜像源的完整步骤与说明"
pubDate: "2026-02-02T12:00:00.000Z"
tags: ["homebrew", "macos", "镜像"]
categories: ["mac"]
draft: false
techStack: "bash"
---

# Homebrew 镜像配置操作手册

## 概述

本手册记录了在 macOS 系统上配置 Homebrew 使用清华大学 TUNA 镜像源的完整步骤。

## 配置步骤

### 1. 创建镜像配置文件

在家目录下创建 `.env.mirrors` 文件，用于存放 Homebrew 镜像配置：

```bash
touch ~/.env.mirrors
```

### 2. 编辑镜像配置文件

在 `.env.mirrors` 文件中添加以下内容：

```bash
# ===== Homebrew 中国镜像（清华 TUNA）=====
export HOMEBREW_API_DOMAIN=https://mirrors.tuna.tsinghua.edu.cn/homebrew-bottles/api
export HOMEBREW_BOTTLE_DOMAIN=https://mirrors.tuna.tsinghua.edu.cn/homebrew-bottles
export HOMEBREW_BREW_GIT_REMOTE=https://mirrors.tuna.tsinghua.edu.cn/git/homebrew/brew.git
export HOMEBREW_CORE_GIT_REMOTE=https://mirrors.tuna.tsinghua.edu.cn/git/homebrew/homebrew-core.git
```

### 3. 配置 Shell 自动加载

编辑 `~/.zshrc` 文件，添加以下内容使镜像配置在每次启动终端时自动生效：

```bash
# Source .env.mirrors
if [ -f ~/.env.mirrors ]; then
    source ~/.env.mirrors
fi
```

### 4. 使配置立即生效

执行以下命令使配置在当前终端会话中生效：

```bash
source ~/.zshrc
```

### 5. 验证配置

检查环境变量是否已正确设置：

```bash
env | grep HOMEBREW
```

预期输出：
```
HOMEBREW_BOTTLE_DOMAIN=https://mirrors.tuna.tsinghua.edu.cn/homebrew-bottles
HOMEBREW_API_DOMAIN=https://mirrors.tuna.tsinghua.edu.cn/homebrew-bottles/api
HOMEBREW_BREW_GIT_REMOTE=https://mirrors.tuna.tsinghua.edu.cn/git/homebrew/brew.git
HOMEBREW_CORE_GIT_REMOTE=https://mirrors.tuna.tsinghua.edu.cn/git/homebrew/homebrew-core.git
```

## 环境变量说明

| 环境变量 | 作用 |
|---------|------|
| `HOMEBREW_API_DOMAIN` | Homebrew API 镜像地址 |
| `HOMEBREW_BOTTLE_DOMAIN` | 预编译二进制包（Bottle）下载镜像地址 |
| `HOMEBREW_BREW_GIT_REMOTE` | Homebrew 核心仓库的 Git 镜像地址 |
| `HOMEBREW_CORE_GIT_REMOTE` | Homebrew Core 软件包仓库的 Git 镜像地址 |

## 恢复默认配置

如需恢复使用官方源，可以：

### 方法一：临时禁用

在 `~/.zshrc` 中注释掉相关行：

```bash
# if [ -f ~/.env.mirrors ]; then
#     source ~/.env.mirrors
# fi
```

### 方法二：删除环境变量

删除或重命名 `.env.mirrors` 文件：

```bash
mv ~/.env.mirrors ~/.env.mirrors.backup
```

然后重启终端或执行：

```bash
unset HOMEBREW_API_DOMAIN
unset HOMEBREW_BOTTLE_DOMAIN
unset HOMEBREW_BREW_GIT_REMOTE
unset HOMEBREW_CORE_GIT_REMOTE
```

## 其他国内镜像源

除了清华 TUNA 镜像，还可以使用其他国内镜像源：

### 中科大镜像

```bash
export HOMEBREW_API_DOMAIN=https://mirrors.ustc.edu.cn/homebrew-bottles/api
export HOMEBREW_BOTTLE_DOMAIN=https://mirrors.ustc.edu.cn/homebrew-bottles
export HOMEBREW_BREW_GIT_REMOTE=https://mirrors.ustc.edu.cn/brew.git
export HOMEBREW_CORE_GIT_REMOTE=https://mirrors.ustc.edu.cn/homebrew-core.git
```

### 阿里云镜像

```bash
export HOMEBREW_BOTTLE_DOMAIN=https://mirrors.aliyun.com/homebrew/homebrew-bottles
```

## 注意事项

1. 配置生效后，后续的 `brew install`、`brew update` 等操作将使用镜像源
2. 首次切换镜像后，建议运行 `brew update` 更新索引
3. 如果遇到问题，可以尝试切换到其他镜像源或恢复官方源

## 相关命令

```bash
# 更新 Homebrew
brew update

# 查看 Homebrew 配置
brew config

# 诊断 Homebrew
brew doctor
```

---

**配置日期：** 2026-02-02  
**镜像源：** 清华大学 TUNA
