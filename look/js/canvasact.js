/**
 * Created by lenovo on 2018/8/7.
 */
var canvas_act_ul = document.getElementsByClassName('canvas_act_ul')[0];
var canvas_ul = document.getElementsByClassName('canvas_ul')[0];
var backll = document.getElementsByClassName('backll')[0];
var canvastt = document.getElementsByClassName('canvastt')[0];
var alternant = document.getElementsByClassName('alternant')[0];
var canvas_cjdiv_zcj = document.getElementsByClassName('canvas_cjdiv_zcj')[0];
var canvas_cjdiv = document.getElementsByClassName('canvas_cjdiv')[0];
var getJson = 'data.json';
var weizhi=[];
var weizhithis=[];
var tiao=0;
var one=-1;
var oneData='';
var time;
var zou=true;

var canvasf = 0;
var w = 3;
var h = 4;
var x = 0;
var neiw = 0;
var neiTime = 0;
var timeList;

censorship();
function censorship(){
    var str = '';
    for(var i=0;i<15;i++){
            str += '<li onclick="subjectList('+(i+1)+');"><a href="#canvas_act"><p>'+(i+1)+'</p></a></li>';
    }
    canvas_ul.innerHTML=str;
}
function subjectList(x){
    $(".nav_canvas").css({display:'none'});
    $(".nav_start").css({display:'block'});
    $(".progress_nei").css({width:140});
    neiw=0;
    neiTime=0;
    timeList=setInterval(function(){
        neiTime++;
        neiw = Math.floor(140/22*neiTime);
        $(".progress_nei").animate({width:140-neiw},500);
        if(neiTime>22){
            clearInterval(timeList);
            $(".canvas_cjdiv").css({zIndex:1});
            canvas_cjdiv_zcj.innerText=canvasf;
        }
    },500);
    this.x=x;
    canvasf=0;
    alternant.innerText=x;
    canvastt.innerText=0;
    backll.style.display = 'none';
    $.ajax({
        type: "post",
        url: getJson,
        data: {},
        dataType: 'json',
        success: function (data) {
            dataList(data);
            tisShu();
        },
        error: function (data) {

        }
    });
}
function dataList(data){
    var luckList = data.luck_list;
    var str = '';
    for(var i=0;i<(w*h);i++){
        if(i%2==0){
            str +='<li class="topic'+(i/2)+'" onclick="pathComparison(this,'+(i/2)+')"><p>'+luckList[(i/2)].problem+'</p></li>'
        }else{
            str +='<li class="topic'+(i-1)/2+'" onclick="pathComparison(this,'+(i-1)/2+')"><p>'+luckList[(i-1)/2].answer+'</p></li>'
        }
    }
    canvas_act_ul.innerHTML = str;
}
function dataListThis(){
    weizhithis=[];
    while(weizhithis.length<12){
        zou = true;
        tiao=Math.floor(Math.random()*12);
        for(var i=0;i<weizhi.length+1;i++){
            if(weizhi[i]==tiao){
                zou=false;
            }
        }
        if(zou){
            weizhi[weizhi.length]=tiao;
        }
    }
    for(var j=0;j<12;j++){
        $(".canvas_act_ul li:nth-child("+(j+1)+")").css({top:weizhi[j]%4*68,left:weizhi[j]%3*300/4});
    }
}
function tisShu(){
    weizhi=[];
    while(weizhi.length<(w*h)){
        zou = true;
        tiao=Math.floor(Math.random()*(w*h));
        for(var i=0;i<weizhi.length+1;i++){
            if(weizhi[i]==tiao){
                zou=false;
            }
        }
        if(zou){
            weizhi[weizhi.length]=tiao;
        }
    }
    for(var j=0;j<(w*h);j++){
        $(".canvas_act_ul li:nth-child("+(j+1)+")").css({top:weizhi[j]%h*(400/h),left:weizhi[j]%w*(300/w)});
    }
}
function pathComparison(o,n){
        if(one==n&&oneData!= o.innerText){
            $(".topic"+n).remove();
            canvasf += 5;
            canvastt.innerText=canvasf;
            if(canvas_act_ul.innerHTML==''){
                x++;
                clearInterval(timeList);
                $(".canvas_tgdiv").css({zIndex:1});
                canvas_cjdiv_zcj.innerText=canvasf;
            }
        }else{
            $(".canvas_act_ul li").css({border:"1px solid #99f"});
            one=n;
            oneData= o.innerText;
            o.style.border="1px solid #ff0";
        }
}
//下一关
function canvasJixu(){
    $(".canvas_tgdiv").css({zIndex:-1});
    if(x<=15){
        subjectList(x);
    }else{
        window.location.href="#guandiv";
    }
}
//重新开始
function canvasNext(){
    $(".canvas_cjdiv").css({zIndex:-1});
        subjectList(1);
}
//返回
function canvasTuichu(){
    $(".nav_canvas").css({display:'block'});
    $(".nav_start").css({display:'none'});
    clearInterval(timeList);
    backll.style.display = 'block';
    canvas_act_ul.innerHTML = '';
    $(".canvas_cjdiv").css({zIndex:-1});
}
//重玩本关
function refurbish(){
    clearInterval(timeList);
    move(canvas_act_ul,'opacity',0,function(){
        $(".progress_nei").css({width:140});
        subjectList(x);
        move(canvas_act_ul,'opacity',100);
    });
}