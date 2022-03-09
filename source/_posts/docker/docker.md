---
title: Docker总结
date: 2019-04-27 23:04:48
tags: docker
categories: docker
---

### Docker 命令

- 获取镜像
  - docker pull 镜像名
- 使用tag命令添加镜像标签
  - docker tag ubuntu:latest myubuntu:latest
  - 注意,这里的myubuntu:latest 和ubuntu:latest 镜像的ID其实是完全一致的,它们实际上同一个镜像文件，知识别名不同而已。
- 进入容器中
  - docker attach 使用该命令 进入容器时候,当多个窗口同时attach到同一个容器中的时候,所有的窗口都会同步显示,所以一个窗口进行阻塞操作的时候,另外的窗口中的容器也会阻塞,而且值得一提的是,当使用exit退出容器的时候,容器会关掉。前提是容器没有使用-d参数后台运行。
  - docker exec -it 容器名 /bin/bash 这种方式与attach相反。
- docker ps -qa 查看所有容器的ID

<!--more-->

##### 导入和导出容器

###### 导出

- docker export -o 文件名 容器ID
  - `docker export -o test.tar ceba23bdb8db`
- docker export 容器ID  > 文件名
  - `docker export ceba23bdb8db > test.tar`

###### 导入

- `docker import test.tar  test/demo`



- 查看容器

~~~
docker top 容器名 or ID
docker container inpect 容器名 or ID
~~~

