---
title: "链表"
description: ""
pubDate: "2019-12-30T18:24:17.000Z"
tags: ["arithmetic"]
categories: ["javascript"]
draft: false
---


### 链表

#### 一、链表的概念

链表是物理存储单元上非连续的，非顺序的存储结构，由一系列节点组成。链表分为有头链表和无头链表。

##### 1、节点

节点包含包含两个部分，一部分是存储数据元素的数据域，一部分是存储指向下一个节点的指针域，这两块构成一个节点，节点如何去使用？简单示意如下：

```javascript
var Node = function(data){
  this.data = data
  this.next = null
}
var node = new Node(1)
var node1 = new Node(8)
var node2 = new Node(9)
console.log(node)
console.log(node.next.data)
```

<!---more-->

##### 2、链表的方法

```javascript
function LinkList(){
  var Node = function(data){
    this.data = data
    this.next = null
  }
  var length = 0
  var head = null
  var tail = null
  // append 方法
  this.append = function(data){
    var new_node = new Node(data)
    if(head === null){
      head = new_node
      tail = new_node
    }else{
      tail.next = new_node
      tail = new_node
    }
    length += 1
  }
  // insert 方法
  this.insert = functoin(index, data){
    if(index < 0 || index > length){
      return false
    }else if(index === length){
      return this.append(index, data)
    }else{
      var new_node = new Node(data)
      if(index === 0){
        new_node.next = head
        head = new_node
      }else{
        var insert_index = 1
        var curr_node = head
        while(insert_index < index){
          insert_index += 1
          curr_node = curr_node.next
        }
        var next_node = curr_node.next
        curr_node.next = new_node
        new_node.next = next_node
      }
      length += 1
      return true
    }
  }
  
  this.print = function(){
    var current_node = head
    while(head === true){
      console.log(current_node.data)
    }
  }
}
```







