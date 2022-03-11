---
title: Css样式选中
date: 2019-05-16 11:01:33
tags: css
categories: css
---

#### CSS选中元素

```css
<div>
	<p></p>
	<p></p>
</div>
style{
  // 选中第一个p标签
  div p:nth-child(1){
  }
  
  // 选中除了第一个p标签以外的标签
  div p:not(:first-child){
    
  }
  
}
```

