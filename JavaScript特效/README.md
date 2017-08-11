### 1.offset

* offset

  检测宽高，返回一个数值；包括padding,border,不包括margin

| offset       |                                   |
| ------------ | --------------------------------- |
| offsetWidth  | 返回宽的数值                            |
| offsetHeight | 返回高的数值                            |
| offsetLeft   | 返回距离父盒子(带有定位)的Left值，父盒子没定位则距离body |
| offsetTop    | 返回距离父盒子(带有定位)的Top值，父盒子没定位则距离body  |
| offsetParent | 返回距离最近的父级元素(带有定位)，若都没定位则返回body    |

* offsetLeft与style.left的区别 

  * offsetLeft可以返回没有定位的元素的Left值，style.left如果没指定Left则返回空字符串

  * offsetLeft返回的是Number，而style.left返回的是字符串

  * offsetLeft只读，而style.left可读写

    ​

### 2、动画

* 匀速动画


  * 焦点图
  * 左右焦点图
* 变速运动
  * 缓动动画
    * 动画原理：盒子位置+步长(逐渐变小)
    * 取值问题：offset取值四舍五入，style取值是实际数值



### 3、Scroll

| scroll属性     | 用途                                       |
| ------------ | :--------------------------------------- |
| scrollWidth  | 检测内容的宽度(超出盒子)，不超出则为盒子的宽度；不包括border和margin |
| scrollHeight | 检测内容的高度(超出盒子)，不超出则为盒子的高度，不包括border和margin |
|              | 检测被浏览器遮挡的头部部分                            |
|              | 检测被浏览器遮挡的左侧部分                            |






