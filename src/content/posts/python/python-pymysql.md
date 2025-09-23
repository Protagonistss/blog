---
title: "PyMysql使用"
description: ""
pubDate: "2022-03-09T10:02:22.000Z"
tags: ["pymysql"]
categories: ["python"]
draft: false
---


# 一、使用pymysql

## 1、安装

`pip install pymysql`

## 2、使用

```python
import pymysql

class Single:
	_instance = None

    def __new__(cls, *args, **kwargs):
        if not cls._instance:
            cls._instance = object.__new__(cls)
        return cls._instance
class GetMysqlIns(Single):
    db = None

    def __init__(self):
        self.db = pymysql.connect(host='xxx', user='xxx',
                                  passwd='xxx', db='xxx')
if __name__ == '__main__':
		db_ins = GetMysqlIns()
		cursor = db_ins.db.cursor()
```

<!--more-->

# 二、新增

```python
create_data = [('xxx', 18)]
create_sql = "insert into table (name, age) values (%s, %s)"
cursor.executemany(create_sql, create_data)
```

# 三、删除

```python
delete_sql = "delete from table where name='{}'"
delete_data = [('name')]
cursor.executemany(delete_sql, delete_data)
```

# 四、修改

```python
update_sql = "update table set name=(%s) where age='18' and gender='male'"
update_data = [('xxx')]
cursor.executemany(update_sql, update_data)
```

# 五、查询

```python
query_sql = "select * from table where name='name'"
cursor.execute(query_sql)
```

# 六、操作失败回滚

```python
try:
		print("操作db")
except Exception as e:
		db_ins.db.rollback()
```

# 七、关闭链接

```python
cursor.close()
db_ins.db.close()
```
