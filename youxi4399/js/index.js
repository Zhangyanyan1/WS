/**
 * Created by lenovo on 2018/1/2.
 */
$(function(){
    var timor1=true;
    var timor2=true;
    var timor3=true;
    var timor4=true;
    var $div1=$(".baiye1").find('div');
    var $div2=$(".baiye2").find('div');
    var $div3=$(".baiye3").find('div');
    var $div4=$(".baiye4").find('div');
    var n=0;
    var m=0;
    var t=0;
    var e=0;
    var set1=setInterval(function(){
        move1($div1);
        move2($div2);
        move3($div3);
        move4($div4);
        n=0;
        m=0;
        t=0;
        e=0;
        timor1=!timor1;
        timor2=!timor2;
        timor3=!timor3;
        timor4=!timor4;
    },2000);
    function move1(dm){
        var set2=setInterval(function(){
            if(timor1==$div1.length){
                clearInterval(set2);
            }else if(timor1){
                dm.eq(n).animate({'top':0},100*n);
            }else{
                dm.eq(n).animate({'top':-27},100*n);
            }
            n++;
        },100);
    }
    function move2(dm){
        var set2=setInterval(function(){
            if(timor2==$div2.length){
                clearInterval(set2);
            }else if(timor2){
                dm.eq(m).animate({'top':0},100*m);
            }else{
                dm.eq(m).animate({'top':-27},100*m);
            }
            m++;
        },100);
    }
    function move3(dm){
        var set2=setInterval(function(){
            if(timor3==$div3.length){
                clearInterval(set2);
            }else if(timor3){
                dm.eq(t).animate({'top':-27},100*t);
            }else{
                dm.eq(t).animate({'top':0},100*t);
            }
            t++;
        },100);
    }
    function move4(dm){
        var set2=setInterval(function(){
            if(timor4==$div4.length){
                clearInterval(set2);
            }else if(timor4){
                dm.eq(e).animate({'top':-27},100*e);
            }else{
                dm.eq(e).animate({'top':0},100*e);
            }
            e++;
        },100);
    }
});
//轮播图
//利用次数算出距离
var lbt=0;
function moveLeft(){
    if(lbt<$(".img_group img").length-1){
        lbt=lbt+1;
    }else{
        lbt=1;//准备好的动画次数
        $(".img_group").css({marginLeft:0});//回位
    }
    $(".img_group").animate({marginLeft:-520*lbt},1000);
    //按钮位置
    $(".ctrl_button li").removeClass('current');
    if(lbt==$(".img_group img").length-1){/*第一个添加*/
        $(".ctrl_button li").eq(0).addClass("current");
    }else{
        $(".ctrl_button li").eq(lbt).addClass("current");
    }
}
t=setInterval(moveLeft,2000);
//点击按钮对应图片显示
$(".ctrl_button li").click(function(){
    lbt=$(this).index();
    document.title=lbt;
    //让图片对应的播放
    $(".img_group").animate({marginLeft:-520*lbt},1000);
    //给按钮换类
    $(".ctrl_button li").removeClass("current").eq(lbt).addClass("current");
})
//停止定时器
$(".wrapper").mouseenter(function(){
    clearInterval(t);
}).mouseleave(function(){
    t=setInterval(marginLeft,2000);
})

//var beijing = document.getElementById('beijing');
//var beijing2 = document.getElementById('beijingliangbian');
//var scroll=document.documentElement.clientWidth;
//var scroll2=document.documentElement.clientWidth;
//var t=195-(scroll-970)/2;
//var t2=195-(scroll2-970)/2;
//beijing.style.background='url(img/topbg.jpg) no-repeat '+(-280-t)+'px -60px';
//beijing2.style.background='url(img/con_bg.png) no-repeat '+(-280-t2)+'px 0';




//demo点击事件
function onP1(){
    $("#divvv").css({left:0});
    $("#onP1").css({backgroundColor:'#999'});
    $("#onP2").css({backgroundColor:'#ccc'});
}
function onP2(){
    $("#divvv").css({left:-242});
    $("#onP1").css({backgroundColor:'#ccc'});
    $("#onP2").css({backgroundColor:'#999'});
}
//function onB(){
//    $(".guding").css({width:0});
//}

