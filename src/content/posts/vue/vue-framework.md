---
title: "架构"
description: ""
pubDate: "2020-01-01T01:06:05.000Z"
tags: ["vue"]
categories: ["vue"]
draft: false
---


#### Vue组件化

##### 插槽

插槽语法是Vue实现的内容分发API，用于复合组件开发。该技术在通用组件库开发中有大量应用。

###### 匿名插槽

```vue
// child
<div>
  <slot></slot>
</div>

// parent
<child>Hello World</child>
```

###### 具名插槽

将内容过分发到子组件指定位置

```vue
// child
<div>
  <solt></solt>
  <solt name="content"></solt>
</div>

// parent
<Child>
	<template v-solt:default>具名插槽</template>
  <template v-solt:content>hello world</template>
</Child>
```

<!--more-->

###### 作用域插槽

分发内容要用到子组件中的数据

```vue
// child
<div>
  <slot :foo="foo"></slot>
</div>

//parent
<child>
	<template v-slot:default="slotProps">来自子组件的数据{{ slotProps.foo }}</template>
</child>
```

