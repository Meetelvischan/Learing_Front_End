# HTML5

### 概念

* 广义:代表浏览端发展的一个阶段,包括HTML5+CSS3+js API
* 狭义:HTML4.1的升级版本

### 语法规范(IE8以下不支持)

* **新增的语义化标签**

  | 网页布局    |      |
  | ------- | ---- |
  | header  | 头部   |
  | nav     | 导航   |
  | section | 区块   |
  | aside   | 侧边栏  |
  | article | 文章   |
  | footer  | 底部   |

* **表单元素**
  | 表单元素     |         |
  | -------- | ------- |
  | datalist | 数据列表    |
  | keygen   | 生成加密字符串 |
  | output   | 不可当数据提交 |
  | meter    | 表示度量器   |
  | progress | 进度条     |

  | 表单input的type属性 |      |
  | -------------- | ---- |
  | email          |      |
  | url            |      |
  | number         |      |
  | tel            |      |
  | range          |      |
  | time           |      |
  | date           |      |
  | month          |      |
  | week           |      |


| 新增属性         |                      |
| ------------ | -------------------- |
| placeholder  | 占位提醒                 |
| autofocus    | 自动获取焦点               |
| autocomplete | 自动完成(on开启,off取消自动完成) |
| required     | 必选项                  |
| multiple     | 多选(文件)               |
| invalidate   | 关闭表单验证(只能加给form)     |
| pattern      | 匹配正则表达式              |



| 表单事件       | 说明              |
| ---------- | --------------- |
| oninput    | 用户输入时触发         |
| onvalidate | 一般用于验证不通过时的提升文字 |



### 如何使IE8以下支持

```html
<!--[if lte ie 8]>
	<script src="html5shiv.min.js"></script>
<![endif]-->
```



### 多媒体

| 标签                       |      |
| ------------------------ | ---- |
| audio (control autoplay) | 音频   |
| video (control autoplay) | 视频   |

  

**兼容写法**

  ```html
  <audio controls autoplay loop>
      <source src="xxx.mp3"/>
      <source src="xxx.wav"/>
      <source src="xxx.ogg"/>
      抱歉你的浏览器不支持播放
  </audio>
  <video controls autoplay loop>
      <source src="xxx.mp4"/>
      <source src="xxx.ogg"/>
      <source src="xxx.webm"/>
      抱歉你的浏览器不支持播放
  </video>
  ```



### DOM扩展

新增的功能

* document.querySelector("selector")[**类似于jQuery,但只选择符合条件的第一个元素**]

* document.querySelectorAll("selector") [**返回所有符合条件元素组成的一个数组**]

* document.getElementsByClassName();

* node.classList.add("classname"); 添加类名;

* node.classList.remove("classname"); 删除类名

* node.classList.contains("classname"); 判断是否包含类名,返回布尔值

* node.classList.toggle("classname"); 切换类名

  ​

### 自定义属性

* 自定义属性必须以**date-**开头
* 获取自定义属性需要通过**dateset['']**获取( 当属性名有多个-横线时,获取要通过驼峰名称获取,如自定义属性为**data-my-name**),获取时通过**dateset[myName]** )






### 概念地图

* 混合式开发