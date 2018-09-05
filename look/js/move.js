function getStyle(obj, attr)
{
    if(obj.currentStyle)
    {
        return obj.currentStyle[attr];
    }
    else
    {
        return getComputedStyle(obj, false)[attr];
    }
}
function move(obj,attr,iTarget,fn){
    clearInterval(obj.timer);
    obj.timer=setInterval(function(){
       var curr=0;
        if(attr=='opacity'){
            curr=parseFloat(getStyle(obj,attr))*100;
        }else{
          curr=parseInt(getStyle(obj,attr));
        }
        var iSpeed=(iTarget-curr)/8;
        iSpeed=iSpeed>0?Math.ceil(iSpeed):Math.floor(iSpeed);
        if(curr==iTarget){
            clearInterval(obj.timer);
            if(fn){
            	fn();
            }
        }else{
            if(attr=='opacity'){
              obj.style.opacity= (curr+iSpeed)/100;
                obj.filter='alpha(opacity:'+(curr+iSpeed)+')';
            }else{
                obj.style[attr]=curr+iSpeed+'px';
            }


        }
    },30)
}
