/**
 * Created by elvis on 2017/8/10.
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
