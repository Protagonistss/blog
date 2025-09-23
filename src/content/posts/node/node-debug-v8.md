---
title: "debug_v8"
description: ""
pubDate: "2022-04-20T19:50:54.000Z"
tags: ["v8"]
categories: ["node"]
draft: false
---


# MAC环境下如何调试v8

#### 一、下载depot_tools

[depot_tools](https://commondatastorage.googleapis.com/chrome-infra-docs/flat/depot_tools/docs/html/depot_tools_tutorial.html#_setting_up)

#### 二、更新depot_tools

```
gclient sync
```

执行上述命令成功后，会出现v8的源码

#### 三、配置工程

```
# at v8
gn gen out/gn --ide=xcode
```

#### 四、编译v8

```
ninja -C out/gn
```

执行成功后会出现d8的可执行文件

