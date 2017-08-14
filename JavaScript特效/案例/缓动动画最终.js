function animate(ele,json,json2){
    clearInterval(ele.timer);
    ele.timer = setInterval(function(){
        var bool = true;
        for(var k in json){
            var leader;
            if(k==="opacity"){
                leader = parseInt(ele.style[k]) ||1;
            }else if(k==="z-index"){
                ele.style.zIndex = json[k];
            }
            else{
                leader = parseInt(ele.style[k]) ||0;
            }
            var step = (json[k] - leader)/10;
            step = step>0?Math.ceil(step):Math.floor(step);
            leader +=step;
            if(k==="opacity"){
                ele.style[k] = leader/100;
                ele.style.filter  = "alpha(opacity="+leader+")";
            }
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