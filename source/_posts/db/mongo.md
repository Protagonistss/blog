---
title: mongo
date: 2019-06-21 16:48:46
tags: mongo
categories: mongo
---

#### Mongo的mongodump、mongorestore

###### 备份

~~~shell
mongodump -d individtax -o /users/
~~~

###### 恢复

~~~shell
mongorestore -d individtax --dir /users/individtax/
~~~





