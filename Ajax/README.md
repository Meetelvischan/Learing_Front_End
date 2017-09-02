# Ajax



### 知识铺垫

#### 1.php



* 读取文件

  ```php
  echo file_get_contents("路径");
  ```





* 编码json

  ```php
  <?php 
    	$jsonObject = json_decode($str);//将字符串解码为php中的json对象;
  	
  	$str = json_encode($jsonObject); //将json对象编码为字符串;
    ?>
  ```

  ​


### Ajax五部曲

#### 1. 创建异步对象

`var ajaxObject = new XMLHttpRequest(); `

#### 2. 设置请求方式和url

`ajaxObjext.open('get','xxx.php');`

`ajaxObjext.open('post','xxx.php');`

#### 3. 发送请求

`ajaxObject.send();`

>如果是post,则要在open()与send()之间添加**ajaxObject.setRequestHeader("Content-type","application/x-www-form-urlencoded);**然后将要发送的数据放在send()里,如:

`ajaxObject.send('name=Elvischan&age=22');`

###  4.注册事件

`ajaxObject.onreadystatechange = function(){}`

#### 5. 在获取的对象中处理数据

```html
if(ajaxObjext.readyState ==4 && ajaxObject.stauts == 200){
	//获取服务器返回的数据:ajaxObject.responseText;
}
```



### XML

* 按照某种既定格式写的字符串
* 统统使用双标签
* 最顶层必须有一个根节点
* 标签名自己定义
* 在php文件中需要指定为xml文件 `header("content-type:text/xml;charset=utf-8")`
* xml版本必须放在第一行 `<?xml version="1.0" encoding="UTF-8"?>`
* ​




### JSON

* json是字符串

* 键和值都需要双引号包裹(如果是数值则可以不用)

* 键和值以`:` 分隔;不同的键值对以`,` 分隔

* 将json转化为js对象:

  ```javascript
  var json = '{"name":"ELvischan","age":"23"}';
  var jsonObject = JSON.parse(json);
  ```




### 模板使用

* 导入模板js

  ```js

  ```

  ​ <script type="text/javascript" src = "./files/template-native.js"></script>

* 定义模板


  `<%=内容 %>` 为要替换的内容

* 读取模板,传入数据

  ```javascript
  var backHtml = template(,data);
  ```

  ​



















### 概念地图

#### 1.服务器

#### 2.BS架构和CS架构





