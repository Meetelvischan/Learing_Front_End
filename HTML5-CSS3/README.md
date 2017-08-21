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

* **表单input的type属性**

  | 属性     |      |
  | ------ | ---- |
  | email  |      |
  | url    |      |
  | number |      |
  | tel    |      |
  | range  |      |
  | time   |      |
  | date   |      |
  | month  |      |
  | week   |      |


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




# CSS3

### 选择器

| 标签选择器      | 说明      |
| ---------- | ------- |
| div        | 标签选择器   |
| .box       | 类选择器    |
| #box       | ID选择器   |
| div p      | 后代选择器   |
| div.box    | 标签指定选择器 |
| div,p,span | 并集选择器   |
| *          | 通配符     |
| div>p      | 子代选择器   |

| 属性选择器                | 说明                    |
| -------------------- | --------------------- |
| element[title]       | 选中带有title属性的element元素 |
| element[class^="xx"] | 选中以xx开头的类名的element元素  |
| element[class$="xx"] | 选中以xx结尾的类名的element元素  |
| element[class*="xx"] | 选中包含xx的类名的element元素   |

| 伪类选择器                 | 说明                |
| --------------------- | ----------------- |
| :hover                | 悬浮                |
| :active               | 点击瞬间              |
| :link                 | 未被访问              |
| :visited              | 点击后的状态            |
| :first-child          | 第一个元素             |
| :last-child           | 最后一个元素            |
| :nth-child(index)     | 第index个元素(编号从一开始) |
| :nth-child(odd/even)  | 第奇数/偶数个元素         |
| :nth-child(n)         | 第n个数(n小于1无效)      |
| :nth-child(2n+1/2n)   | 第奇数/偶数个元素         |
| :nth-child(-n+m)      | 前m个               |
| :nth-last-child(-n+m) | 后m个               |
| :nth-last-child(m)    | 倒数第m个             |
| :nth-child(mn)        | m的倍数              |
| :empty                | 选中没有后代元素的元素       |
| :target               | 表示锚点被激活的状态        |



| 伪元素选择器         | 说明                    |
| -------------- | --------------------- |
| ::before       | 之前**(必须要有content属性)** |
| ::after        | 之后**(必须要有content属性)** |
| ::first-letter | 选中第一个字母               |
| ::first-line   | 选中第一行                 |
| ::selection    | 选中的部分                 |



### 透明度

* CSS2
  * opacity
  * 缺点:会继承给子元素且无法更改
* CSS3
  * **rgba()** :red green blue alpha
  * **hsla()**: h:色调(取值0-360) s:饱和度(取值0-100%) l:亮度(取值0-100%) a:alpha(取值0-1)



### 文本效果

* text-shadow(水平位移,垂直位移,模糊度,阴影颜色) : (可以设置多个阴影,并列书写用逗号隔开) 



### 盒模型

* content-box
* padding-box
* border-box



### 浏览器私有化前缀

```css
selector {
    attribute:-webkit-xxx
      		  -moz-xxx
      		  -ms-xxx
      		  -o-xxx
}
```

### 边框圆角

```css
border-radius:50%  圆形(或者设置为width的一半)
border-radius:width/一半width 椭圆
border-radius:
```

### 盒子阴影

* box-shadow:水平位移 垂直位移 模糊度 阴影大小 阴影颜色  insert(内阴影)



### 背景

* background-size: 100px 100px
* background-size:50% 50%
* background-size:cover    (保证覆盖盒子,但是不保证能铺满盒子)
* background-size:contain    (保证背景图片最大化地在盒子中等比例显示.当不能保证铺满盒子)



### 渐变

* linear-gradient(方向(to left/right/top/bottom),起始颜色,终止颜色)
* radial-gradient(辐射半径,方向(at left/right/top/bottom),起始颜色,终止颜色)



### transition过渡

* transition:属性 过渡时间 延迟时间
* transition-property:属性
* transition-duration:过渡持续时间
* transition-timing-function:linear(线性)/ease-in(加速)/ease-out(减速)/ease-in-out(先加速后减速)
* transition-delay:延迟时间

### 2D动画

* transform: translate(水平px,垂直px) 移动元素
* transform:rotate(度数deg) 旋转元素

### 概念地图

* 混合式开发