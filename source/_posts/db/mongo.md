---
title: Mongo备份操作
date: 2019-06-21 16:48:46
tags: backup
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





