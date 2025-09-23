---
title: "nvm"
description: ""
pubDate: "2020-02-13T22:35:24.000Z"
tags: ["install"]
categories: ["nvm"]
draft: false
---


### NVM 安装

```shell
curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.33.6/install.sh | bash
# .bash_profile
export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && . "$NVM_DIR/nvm.sh"

# 查看本地所有node版本
nvm list

# 安装node
nvm install v8.12.0
# 切换node版本
nvm use 8.12.0
```

