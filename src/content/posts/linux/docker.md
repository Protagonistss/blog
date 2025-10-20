---
title: "Docker完整使用指南"
description: "Docker安装、配置、基础命令和容器管理完整指南"
pubDate: "2025-10-20T16:06:48.000Z"
tags: ["docker"]
categories: ["linux"]
draft: false
techStack: "bash"
---

# Docker完整使用指南

## 1. Docker安装与配置

### 步骤 1：配置yum阿里云镜像源
```bash
yum install -y yum-utils

yum-config-manager \
    --add-repo http://mirrors.aliyun.com/docker-ce/linux/centos/docker-ce.repo

yum makecache fast

yum install docker-ce
```

### 步骤 2：配置Docker阿里云镜像
```bash
mkdir -p /etc/docker
vim daemon.json
```
```json
{
  "registry-mirrors": [
    "https://<你的ID>.mirror.aliyuncs.com",
    "https://docker.mirrors.ustc.edu.cn",
    "https://mirror.aliyun.com"
  ],
  "exec-opts": ["native.cgroupdriver=systemd"],
  "log-driver": "json-file",
  "log-opts": {
    "max-size": "100m"
  },
  "storage-driver": "overlay2"
}
```

### 步骤 3：重启 Docker 服务
```bash
systemctl daemon-reexec
systemctl restart docker
systemctl status docker
```

### 步骤 4：验证是否配置成功
```bash
docker info | grep -A3 "Registry Mirrors"
```

## 2. Docker基础命令

### 镜像操作
- **获取镜像**
  - `docker pull 镜像名`
- **添加镜像标签**
  - `docker tag ubuntu:latest myubuntu:latest`
  - 注意：这里的myubuntu:latest 和ubuntu:latest 镜像的ID其实是完全一致的，它们实际上是同一个镜像文件，只是别名不同而已。

### 容器操作
- **进入容器**
  - `docker attach 容器名` - 使用该命令进入容器时，当多个窗口同时attach到同一个容器中时，所有窗口都会同步显示，一个窗口进行阻塞操作时，其他窗口中的容器也会阻塞。使用exit退出容器时，容器会关闭（前提是容器没有使用-d参数后台运行）
  - `docker exec -it 容器名 /bin/bash` - 这种方式与attach相反，推荐使用
- **查看容器**
  - `docker ps -qa` - 查看所有容器的ID
  - `docker top 容器名或ID` - 查看容器进程
  - `docker container inspect 容器名或ID` - 查看容器详细信息

## 3. 容器管理

### 启动容器示例
```bash
docker run -d \
  --name mysql8 \
  -p 3306:3306 \
  -e MYSQL_ROOT_PASSWORD=123456 \
  -v /opt/mysql/data:/var/lib/mysql \
  -v /opt/mysql/conf:/etc/mysql/conf.d \
  -v /opt/mysql/logs:/logs \
  --restart=always \
  mysql:8.0
```

### 导入和导出容器

#### 导出容器
- `docker export -o 文件名 容器ID`
  - `docker export -o test.tar ceba23bdb8db`
- `docker export 容器ID > 文件名`
  - `docker export ceba23bdb8db > test.tar`

#### 导入容器
- `docker import test.tar test/demo`

<!--more-->

