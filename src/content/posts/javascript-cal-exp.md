---
title: "计算表达式"
description: ""
pubDate: "2019-12-27T17:24:00.000Z"
tags: ["arithmetic"]
categories: ["javascript"]
draft: false
---


### 计算表达式拆解

> 本例子使用数组实现栈,在栈的基础上 实现计算表达式

#### 一、定义栈

```javascript
function Stack(){
  var items = []
  
  this.push = function(item){
    items.push(item)
  }
  
  this.pop = function(){
    return items.pop()
  }
  
  this.isEmpty = function(){
    return items.length === 0
  }
  
  this.size = function(){
    return items.length
  }
  
  this.top = function(){
    return items[items.length - 1]
  }
  
  this.clear = function(){
    items = []
  }
}
```

<!--more-->

#### 二、用上述栈先来实现一个判断左右括号闭合的方法

```javascript
var stack = new Stack()
// validator
// 只入栈括号,
function isLegal(param){
  for(var i = 0; i<param.length; i++){
    var item = param[i]
    if(item === '('){
      stack.push(item)
    }else if(item === ')'){
      if(stack.isEmpty()){
        return false
      }else{
        stack.pop()
      }
    }
  }
  return stack.isEmpty()
}

isLegal("((abc))")
```

#### 三、实现一个计算后缀表达式

```javascript
function calculate(expressionList){
  var data_stack = new Stack()
  for(var i = 0; i < expressionList.length; i++){
  	var item = expressionList[i]
    if(['+', '-', '*', '/'].indexOf(item) >= 0){
      var pre = data_stack.pop()
      var next = data_stack.pop()
      var result = next + item + pre
      result = parseInt(eval(result))
      stack.push(result)
    }else{
      stack.push(item)
    }
  }
  return stack.pop()
}
calculate(['4','13', '5', '/', '+'])
```





