# jQuery

### 思想

* 链式编程
* 隐式迭代

### 使用步骤

* 引入

`<script src="jquery-1.11.1.js"</script>`

* 入口函数(DOM加载完毕后就执行)

`$(document).ready(function(){事件驱动程序}) ` 或者`$(function(){事件驱动程序})`

如果要全部元素加载完毕再执行的话，使用`$(window).ready(function(){事件驱动程序})`

* 事件驱动


### jQuery对象和DOM对象的区别和联系

* jQuery对象包含DOM对象的内容
* 转换

```javascript

```





### jQuery选择器

* 基本选择器


  

* 层级选择器


  

* 基本过滤选择器


* 筛选选择器

| 符号         | 说明            |
| ---------- | :------------ |
| find()     | 查找指定元素的所有后代元素 |
| children() | 查找指定元素的直接子元素  |
| siblings() | 查找指定元素的所有兄弟元素 |
| parent()   | 获取元素的父元素      |
| eq(index)  | 获取指定索引值的元素    |



### jQuery DOM操作











###jQuery动画

* **显示隐藏**

| show/hide()方法          | 说明                                    |
| ---------------------- | ------------------------------------- |
| show()                 | 显示动画(通过display实现)                     |
| hide()                 | 隐藏动画(通过display实现)                     |
| show(毫秒值)              | 显示动画(通过width,height,opcity和display实现) |
| hide(毫秒值)              | 隐藏动画(通过width,height,opcity和display实现) |
| show(slow/normal/fast) | slow:600ms ;normal:400ms; fast:200ms  |
| show/hide(毫秒值,回调函数)    | 动画执行后执行回调函数                           |
| toggle()               | 在显示隐藏之间切换(同样有四种参数设置)                  |

* ​