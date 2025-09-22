---
title: "环境搭建"
description: ""
pubDate: "2020-01-17T10:38:05.000Z"
tags: ["env"]
categories: ["linux"]
draft: false
---


### 一、UBUNTU18.04 安装

#### 1、服务器创建用户

```bash
// 在 /home 目录下创建 username 
sudo useradd -m -s /bin/bash username
// 设置密码
sudo passwd username
// 给username 赋予管理员权限
sudo vim /etc/sudoers
root ALL=(ALL:ALL)ALL
protagonisths ALL=(ALL:ALL)ALL
```

#### 安装nodejs

```bash
curl -sL https://deb.nodesource.com/setup_10.x | sudo -E bash -
sudo apt-get install -y nodejs
```

> https://github.com/nodesource/distributions#debinstall

#### 安装yarn

```bash
curl -sL https://dl.yarnpkg.com/debian/pubkey.gpg | sudo apt-key add -
sudo apt-get update && sudo apt-get install yarn
```

#### 安装Pm2

```bash
# 4.2.1
npm i -g pm2
```

<!--more-->

#### 安装mongo

```bash
# install
sudo apt-get install -y mongodb
# stop
sudo service mongodb stop
# setup
sudo service mongodb start
```

