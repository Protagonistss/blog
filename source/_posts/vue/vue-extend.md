---
title: Vue-Extend总结
date: 2020-01-02 10:50:39
tags: vue
categories: Vue
---

#### 一、Vue-extend

Vue.extend(options)在官法文章中的归类是全局API，是使用基础Vue构造器，创造一个子类，动态地创建实例。

```js
const Init = Vue.extend({
	template: '<div>Hello World</div>',
	data(){
		return {
			msg:'Hello'
		}	
	}
	// render: h => h(Component)
})
new Init().$mount('app')
```

#### 二、Vue.component()

注册或者获取全局组件，注册还会自动使用给定的id设置组件的名称

<!--more-->

```js
// 注册组件时，传入一个构造器
Vue.component('hs-form',Vue.extend(...))

// 注册组件时，传入一个选项对象
Vue.component('hs-form',{
	data(){
		return{
			name: 'Hello'
		}
	}
})

// 获取注册的组件（始终返回构造器）
var hsFormConstructor = Vue.component('hs-form')
```

