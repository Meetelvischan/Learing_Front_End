### Viewport

* Emmet语法调出:`meta:vp`

  ```html
  <meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
  //width=device-width 将宽度设置为设备宽度
  //user-scalable=no 禁用用户缩放
  //initial-scale=1.0 初始的缩放比例
  //maximum-scale=1.0 最大缩放值
  //minimum-scale=1.0 最小缩放值
  ```



### 移动web样式注意

* 取消点击高亮效果

  `-webkit-tap-highlight-color:transparent;/*清除点击高亮效果*/`

* 盒子模型

  `box-sizing:border-box //保证盒子的大小不变`

* input默认外观

  `-webkit-appearance:none`

* 宽高度

  由于要适配不同的设备,所以一般用百分比宽度,由于高度是由内容撑开的,因此不用设置