---
title: tomcat
date: 2019-04-30 20:49:42
tags: tomcat
categories: java
---

#### Tomcat

- tomcat 下载
  - [tomcat 下载地址](<http://tomcat.apache.org/>)
- mac 下载tar.gz格式
  - 解压 `tar -zxvf apache-tomcat-9.0.19.tar.gz 
  - 将解压后的文件夹重命名为Tomcat( 之所以重名,只是习惯性命名 )放到/Library下
  - 进入到Tomcat 文件夹下的bin目录
  - 设置bin目录下的所有.sh文件的读写执行权限 `sudo chmod 755 *.sh`
  - 启动tomcat 服务`sudo sh startup.sh`
  - 关闭tomcat服务`sudo sh shutdown.sh`
- 注意:tomcat 的配置信息都在server.xml文件里配置，如果想自定义配置,可以去xml文件配置

#### Eclipse 集成Tomcat

- Window->show view -> server

  



