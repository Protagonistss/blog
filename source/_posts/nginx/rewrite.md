---
title: Rewrite总结
date: 2019-06-01 20:06:54
tags: rewrite
categories: nginx
---

#### 一、Rewrite

​	实现url<span style="color:red">重写</span>以及<span style="color:red">重定向</span>

 #### 二、场景

​	url访问跳转,支持开发设计(页面跳转,兼容性支持,展示效果等)

​	SEO优化

​	运维人员维护

​	后台维护、流量转发

​	安全->伪静态

#### 三、配置语法

```bash
Systanx: rewrite regx replacement[flag]
​	Default: --
​	Context:server,location,if
```

​	<!--more-->

#### 四、正则

​	pcre 正则测试

 #### 五、Flag

​	last : 停止rewrite 检测

​	Break: 停止rewrite 检测

​	redirect : 返回302临时重定向,地址栏会显示跳转后的地址

​	permanent : 返回301永久重定向，地址栏会显示跳转后的地址 (nginx 停掉也会重定向)

#### 六、Rewrite 规则优先级

​	执行server块的rewrite指令

​	执行location匹配

​	执行选定的location中的rewrite

#### 七、示例

~~~bash
server{
    listen  6060;
    server_name  localhost;
    access_log  /var/log/nginx/host.access.log  main;
    root /opt/app/code;

    location / {
        rewrite ^/course-(\d+)-(\d+)-(\d+)\.html$ /course/$1/$2/course_$3.html break;

        if ($http_user_agent ~* Chrome) {
            rewrite ^/nginx http://www.baidu.com redirect;
        }
        if (!-f $request_filename) {
            rewrite ^/(.*)$ http://www.baidu.com redirect;
        }
        index  index.html  index.htm;
    }

    location ~ ^/break {
        rewrite ^/break /test/ break;
    }

    location ~ ^/last {
        #rewrite ^/last /test/ last;
        rewrite ^/last /test/ redirect;
    }

    location ~ ^/protagonist {
    	#rewrite ^/protagonist  http://39.97.187.133:80 permanent;
			rewrite ^/protagonist  http://39.97.187.133:80 redirect;
    }

    location /test/ {
			default_type  application/json;
			return 200 '{"status":"success"}';
    }
}
~~~



