---
title: Mongo备份操作
date: 2019-06-21 16:48:46
tags: backup
categories: mongo
---

# Mongo的更新数组

```
$push: 增加一个对象到数组底部
$pushAll: 增加多个对象到数组底部
$pop: 从数组底部删除一个对象
$pull: 如果匹配指定的值,从数组中删除对应的对象
$pullAll: 如果匹配任意的值,从数据中删除相应的对象
$addToSet: 如果不存在则增加一个值到数组
```

# Mongo的mongodump、mongorestore

###### 备份

~~~bash
mongodump -d individtax -o /users/
~~~

###### 恢复

~~~bash
mongorestore -d individtax --dir /users/individtax/
~~~

# Mongo删除数据库

```bash
db.dropDatabase()
```





