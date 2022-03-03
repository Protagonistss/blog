---
title: node安装
date: 2019-05-22 14:19:10
tags: install
categories: node
---

##### Node Install

- Centos

  - cd /usr/local

  - ~~~~bash
    wget https://github-production-release-asset-2e65be.s3.amazonaws.com/49970642/4ea79e00-6a70-11e9-8a21-46a123284fc5?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAIWNJYAX4CSVEH53A%2F20190522%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20190522T052650Z&X-Amz-Expires=300&X-Amz-Signature=a92bd6d054a303
    ~~~~

  - 此时下载的是二进制的包,不是采用源码安装,所以解压后没有configure文件

  - 解压下载后的压缩包

  - `tar -xvf node-v10.15.3-linux-x64`

  -  配置环境变量

    - 编辑.bash_profile
      - ` export PATH=$PATH:/usr/local/node-v10.15.3-linux-x64/bin`
      - `source .bash_profile`

  - 配置软连接

    - `ln -s /usr/local/node-v10.15.3-linux-x64/bin/node /usr/local/bin`
    - `ln -s /usr/local/node-v10.15.3-linux-x64/bin/npm /usr/local/bin`
    - `ln -s /usr/local/node-v10.15.3-linux-x64/bin/npx /usr/local/bin`

