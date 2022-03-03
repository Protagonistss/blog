---
title: 队列
date: 2019-12-27 18:03:19
tags: Queue
categories: javascript
---

### 队列

> 利用数组定义队列,在队列的基础上实现一些功能

#### 一、定义队列

```javascript
function Queue(){
  var items = []
  
  this.enqueue = function(item){
    items.push(item)
  }
  
  this.dequeue = function(){
    return items.shift()
  }
  
  this.head = function(){
    return items[0]
  }
  
  this.tail = function(){
    return items[items.length - 1]
  }
  
  this.size = function(){
    return items.length
  }
  
  this.clear = function(){
    items = []
  }
  
  this.Empty = function(){
    return items.length === 0
  }
}
```

<!--more-->

#### 二、实现斐波那契

```javascript
// 使用队列实现斐波那契,此处默认n > 2
function fibonacci(n){
  var queue = new Queue()
  queue.enqueue(1)
  queue.enqueue(1)
  var index = 0
  while(index < n - 2 ){
     var old_head_data = queue.dequeue()
     var new_head_data = queue.head()
     var next_data = old_head_data + new_head_data
     queue.enqueue(next_data)
    index += 1
  }
  queue.dequeue()
  return queue.head()
}
```

> 队列中始终只有两个数, 第二个数便是所求的数

#### 三、循环删除

> 有一个数组a[100] 存放0-99,要求每隔两个数删掉一个数,到末尾时循环至开头继续进行,求最后一个被删除的数.

```javascript
function deleteCircle(arr){
  var queue = new Queue()
  for(var i = 0; i < arr.length; i++){
    queue.enqueue(arr[i])
  }
  var index = 0
  while(queue.size() != 1){
    var item = queue.dequeue()
    index += 1
    if(index % 3 != 0){
      queue.enqueue(item)
    }
  }
}

var arr = []
for(var i = 0; i < 100; i++){
  arr.push(i)
}
deleteCircle(arr)
```

#### 四、使用两个队列实现一个栈

```javascript
function Stack(){
  var init_queue_first  = new Queue()
  var init_queue_second = new Queue()
  
  var data_queue = null
 	var empty_queue = null
  
  function validateEmptyQueue(){
    if(init_queue_first.isEmpty()&& init_queue_second.isEmpty()){
    	data_queue = init_queue_first
      empty_queue = init_queue_second
    }else if(init_queue_first.isEmpty()){
      data_queue = init_queue_second
      empty_queue = init_queue_first
    }else{
      data_queue = init_queue_first
      empty_queue = init_queue_second
    }
  }
	
  this.push = function(item){
    validateEmptyQueue()
    data_queue.enqueue(item)
  }
  
  this.top = function(){
    validateEmptyQueue()
    return data_queue.tail()
  }
  
  this.pop = function(){
    validateEmptyQueue()
    while(data_queue.size()>1){
      empty_queue.enqueue(data_queue.dequeue())
    }
    return data_queue.dequeue()
  }
  
  var stack = new Stack()
  stack.push(1)
  stack.push(2)
  console.log(stack.pop())
  console.log(stack.pop())
  }
```

#### 五、使用队列实现杨辉三角

```javascript
function triangle(n){
  var queue = new Queue()
  queue.enqueue(1)
 	for(var i = 0; i < n; i++){
    var line = ''
    var pre = 0
    for(var j = 0; j < i; j++){
      var item = queue.dequeue()
      line += item + " "
      //此时开始计算下一行的数据
      pre = item
      var value = item + pre
      queue.enqueue(value)
    }
    queue.enqueue(1)
    console.log(line)
  }
}

triangle(6)
```

> 外层for循环是计算行,内层for循环是计算行的内容

