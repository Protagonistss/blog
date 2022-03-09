---
title: webpack构建vue项目
date: 2021-01-14 17:28:31
tags: webpack
categories: webpack
---

### Setup

#### 1、安装webpack依赖

```bash
yarn add webpack webpack-cli -D
yarn add webpack-dev-server -D
yarn add html-webpack-plugin -D
```

#### 2、安装babel依赖

```bash
yarn add babel-loader @babel/core -D
# 为了转化es6代码，需要安装babel插件
yarn add @babel/preset-env @babel/polyfill -D
# 安装防止全局污染babel插件
yarn add -D @babel/plugin-transform-runtime
yarn add @babel/runtime @babel/runtime-corejs2
```

<!-- more -->

#### 3、创建.babelrc文件

```javascript
{
  "presets": [
    "@babel/preset-env"
  ],
  "plugins": [
    [
      "@babel/plugin-transform-runtime",
      {
        "corejs": 2,
        "helpers": true,
        "regenerator": true,
        "useESModules": false
      }
    ]
  ]
}
```



#### 4、安装自动化辅助

```bash
yarn add copy-webpack-plugin -D
yarn add clean-webpack-plugin -D
yarn add html-webpack-plugin -D
```

```javascript
 plugins: [
  new htmlWebpackPlugin({
    filename: "index.html",
    template: resolve("../examples/public/index.html"),
  }),
  new CleanWebpackPlugin(),
  new copyWebpackPlugin({
    patterns: [
      {
        from: resolve("../examples/public"),
        to: resolve("../dist"),
      },
    ],
  }),
],
```



#### 5、解析css

```bash
yarn add style-loader css-loader -D
```

```javascript
module:{
  rules:[{
    test:/\.css$/,
    use:['style-loader','css-loader']
  }]
}
```

#### 6、安装预编器sass

```bash
yarn add sass-loader node-sass -D
```

```javascript
{
  test: /\.scss$/,
  use: [
    'style-loader'
    'css-loader',
    'sass-loader'
  ]
}
```



#### 7、抽取cs

```bash
yarn add mini-css-extract-plugin -D
```

```javascript
module:{
  rules:[
    {
      test: /\.scss$/,
      use: [
        miniCssExtractPlugin.loader,
        "css-loader",
        "sass-loader",
      ],
    }
  ]
}
plugins:[
  new MiniCssExtractPlugin({
    filename: "css/[name].[hash:8].css",
    chunkFilename: "css/[id].css",
  })
]
```

#### 8、识别vue文件

```bash
yarn add vue-loader vue-template-compiler vue-style-loader -D
yarn add vue -S
```

```javascript
rules:[
  {
    test: /\.vue$/,
    use: ["vue-loader"],
  },
],
resolve:{
  alias: {
    vue$: "vue/dist/vue.runtime.esm.js",
    "@": resolve("../src"),
    "@examples": resolve("../examples"),
  },
 	extensions: [".js", ".vue"],
},
plugins:[
  new vueLoaderPlugin()
]
```

### 配置eslint

eslant-loader 可以每次保存的时候校验代码

