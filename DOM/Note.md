### DOM

事件：事件源+事件类型 事件驱动程序

1. 获取事件源
   * document.getElementById();
   * document.getElementByClassname();
   * document.getElementByTagname();
2. 绑定事件
   * 匿名绑定：element.onclick = function (){};
   * 用函数名绑定：element.onclick = fn;function fn(){};
   * 行内绑定：<div class="box" onclick=fn()></div>
3. 事件驱动程序


* 什么是DOM
  * DOM由节点构成
  * DOM树
* 获取节点
  * 通过ID
  * 通过classname
  * 通过tagname
* ​