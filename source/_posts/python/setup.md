---
title: Rabbitmq安装和使用
date: 2021-01-16 12:50:41
tags: python&&rabbit
categories: rabbit
---

#### 一、docker方式安装

1、获取镜像，可以获取最新的，当然也可以选择dockerhub上star最多的，比如rabbitmq:3.8-management

```bash
# 拉取镜像
docker pull rabbitmq
```

2、搭建容器

```bash
docker run --name rabbitmq -d -p 15672:15672 -p 5672:5672 [imageId]
```

> -p 制定容器内部端口号与宿主机之间的映射，rabbitmq默认使用15672作为web端访问端口，5672为其数据通信端口。

3、创建账户

> 默认创建为guest用户，密码也是guest。但是默认创建的用户只能 通过本地网络访问，远程网络访问受限，所以我们需要创建一个帐号。

```bash
		# 进入容器
		docker exec -it containerId /bin/bash
		# add user
		rabbitmqctl add_user root rootroot
		# 给root账户赋所有权限
		rabbitmqctl set_permissions -p / root ".*" ".*" ".*"
		# 给admin账户赋予administrator
		rabbitmqctl set_user_tags root administrator
		# 查看创建的用户
		rabbitmqctl list_users
```

<!--more-->

#### 二、使用python pika测试rabbitmq

1、创建producer.py，执行python producer.py

```python
#!/usr/bin/env python
# -*- coding:utf-8 -*-
# author: huangshan
# datetime: 2021-01-17 11:28
# software: PyCharm

import pika

auth = pika.PlainCredentials('root', 'rootroot')
connection = pika.BlockingConnection(pika.ConnectionParameters('192.168.50.107', 5672, '/', auth))
channel = connection.channel()
channel.queue_declare(queue='TESTCASE1')
channel.basic_publish(exchange='',routing_key='TESTCASE1', body='Hello World')

print("Sent 'Hello World'")
connection.close()
```

2、创建consumer.py，执行python consumer.py

```python
#!/usr/bin/env python
# -*- coding:utf-8 -*-
# author: huangshan
# datetime: 2021-01-17 02:08
# software: PyCharm

import pika

auth = pika.PlainCredentials('root', 'rootroot')
connection = pika.BlockingConnection(
    pika.ConnectionParameters(host='192.168.50.107', port=5672, virtual_host='/', credentials=auth))
channel = connection.channel()
channel.queue_declare(queue='TESTCASE1')


def callback(ch, method, properties, body):
    print("Received %r" % body)

channel.basic_consume(on_message_callback=callback, queue='TESTCASE1', auto_ack=True)
print('Waitting for message To exit press CTRL+ C')
channel.start_consuming()
```



