/**
 * 缓动框架封装
 * @param ele
 * @param json
 * @param fn
 */
function animate(ele,json,json2){
    clearInterval(ele.timer);
    ele.timer = setInterval(function(){
        var bool = true;
        for(var k in json){
            var leader = parseInt(ele.style[k]) ||0;
            var step = (json[k] - leader)/10;
            step = step>0?Math.ceil(step):Math.floor(step);
            leader +=step;
            ele.style[k] = leader +"px";
            if(Math.abs(json[k]-leader)>Math.abs(step)){
                bool = false;
            }
        }
        if(bool){
            ele.style[k] = json[k] + "px";
            clearInterval(ele.timer);
            if(json2){
                animate(ele,json2);
            }
        }
    },25)
}