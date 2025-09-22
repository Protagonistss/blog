---
title: "eslint"
description: ""
pubDate: "2022-04-10T12:11:07.000Z"
tags: ["eslant config"]
categories: ["eslint"]
draft: false
---


# 一、初始化eslint

```
pnpm add eslint -D
npx eslint --init
```

> 选择自己的配置

# 二、初始化prettier

```
pnpm add prettier -D
```

> 配置prettier文件，创建.prettierrc.json

# 三、解决prettier和eslint冲突

```
pnpm add eslint-config-prettier eslint-plugin-prettier -D
```

