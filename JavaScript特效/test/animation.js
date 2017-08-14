/**
 * Created by elvis on 2017/8/11.
 */
function slowL2R(ele,target){
    clearInterval(ele.timer);
    var step = (target - ele.offsetLeft)/10;
    step = step>0?Math.ceil(step):Math.floor(step);
    ele.timer = setInterval(function(){
        ele.style.left = ele.offsetLeft + step +"px";
        if(Math.abs(target-ele.offsetLeft)<Math.abs(step)){
            ele.style.left = target + "px";
            clearInterval(ele.timer);
        }
    },30);

}

function slowT2B(ele,target){
    clearInterval(ele.timer);
    var step = (target - ele.offsetTop)/10;
    step = step>0?Math.ceil(step):Math.floor(step);
    ele.timer = setInterval(function(){
        ele.style.top = ele.offsetTop + step +"px";
        if(Math.abs(target-ele.offsetTop)<Math.abs(step)){
            ele.style.top = target + "px";
            clearInterval(ele.timer);
        }
    },30);

}
