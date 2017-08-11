/**
 * Created by elvis on 2017/8/10.
 */

/**
 * 匀速运动动画封装
 * @param ele
 * @param target
 */
function animate(ele,target){
    clearInterval(ele.timer);
    var speed = target>ele.offsetLeft?10:-10;
    ele.timer = setInterval(function(){
        ele.style.left = ele.offsetLeft +speed + "px";
        var dis =target - ele.offsetLeft;
        if(Math.abs(dis)<Math.abs(speed)){
            ele.style.left = target + "px";
            clearInterval(ele.timer);
        }
    },10)

}

/**
 * 缓动动画
 * @param ele
 * @param target
 */
function slow(ele,target){
    clearInterval(ele.timer);
    var step = target>ele.offsetLeft?Math.ceil((target-ele.offsetLeft)/10):Math.floor((target-ele.offsetLeft)/10);
    // 如果目标大于当前，则步长要向上取整，否则要向下取整
    ele.timer = setInterval(function(){
        ele.style.left = ele.offsetLeft + step +"px";
        if(Math.abs(target-ele.offsetLeft)<Math.abs(step)){
            ele.style.left = target+"px";
            clearInterval(ele.timer);
        }
    },20);
}

function slowTop(ele,target){
    clearInterval(ele.timer);
    var step = target>ele.offsetTop?Math.ceil((target-ele.offsetTop)/10):Math.floor((target-ele.offsetTop)/10);
    // 如果目标大于当前，则步长要向上取整，否则要向下取整
    ele.timer = setInterval(function(){
        ele.style.top = ele.offsetTop + step +"px";
        if(Math.abs(target-ele.offsetTop)<Math.abs(step)){
            ele.style.top = target+"px";
            clearInterval(ele.timer);
        }
    },20);
}

