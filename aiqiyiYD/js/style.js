/**
 * Created by lenovo on 2018/3/7.
 */
$('.left-centent-ul li').eq(0).css({'borderBottom':"0.0625rem solid #0bbe06"});
$('.left-centent-ul li:eq(0) a').css({'color':"#0bbe06"});

$(document).ready(function(){
    $(".main_visual").hover(function(){
        $("#btn_prev,#btn_next").fadeIn();
    },function(){
        $("#btn_prev,#btn_next").fadeOut();
    });
    $dragBln = false;
    $(".main_image").touchSlider({
    	flexible : true,
    	speed : 200,
    	btn_prev : $("#btn_prev"),
    	btn_next : $("#btn_next"),
    	paging : $(".flicking_con a"),
    	counter : function (e){
    		//var ak=this.index();
    		$(".flicking_con a").removeClass("on").eq(e.current-1).addClass("on");
    		$(".carousel-title a").not(e.current-1).css('display',"none");
    		$(".carousel-title a").eq(e.current-1).css('display',"block");
    	}
    });
    $(".main_image").bind("mousedown",function(){
    	$dragBln = false;
    });
    $(".main_image").bind("dragstart",function(){
    	$dragBln = true;
    });
    $(".main_image a").click(function(){
    	if($dragBln){
    		return false;
    	}
    });
    timer = setInterval(function(){
    	$("#btn_next").click();
    },5000);
    $(".main_visual").hover(function(){
        clearInterval(timer);
    },function(){
        timer = setInterval(function(){
            $("#btn_next").click();
        },5000);
    });
    $(".main_image").bind("touchstart",function(){
        clearInterval(timer);
    }).bind("touchend", function(){
        timer = setInterval(function(){
            $("#btn_next").click();
        }, 5000);
    });
});

//返回顶部
$(window).scroll(function(){
    if($(window).scrollTop()>=500){
        $('.fixed').css('opacity',"1");
    }else{
        $('.fixed').css('opacity',"0");
    }
});
//var akk=document.documentElement.scrollTop;
var axz=null;
var oFixed=document.getElementsByClassName('fixed')[0];
var oBody=document.getElementsByClassName('wrap')[0];
oBody.addEventListener('touchstart',function(){        //取消点击出现轮廓
    //event.preventDefault();
    $(this).css('outline','0 none');
    //alert(1)
},false);
oFixed.addEventListener('touchstart',function(event){       /*返回顶部*/
    event.preventDefault();
    $(this).css('outline','0 none');
    axz=setInterval(function(){
        scrollBy(0,-300);
        if($(window).scrollTop()==0){
            clearInterval(axz);
        }
    },30)
},false);

//遮罩层
var clien=document.documentElement.clientHeight || document.body.clientHeight;
$('.mask').height(clien);
$('.mask').bind('touchmove',function(event){
    event.preventDefault();
});
$('.mask_tguo').bind('touchstart',function(event){
    event.preventDefault();
    $('.mask').css('display','none');
});

//搜索
$(".header_searcha").bind('touchstart',function(event){
    event.preventDefault();
    $(this).css('display','none');
    $('.searcax').css('display','block');
    $('.header_Record').css('display','none');
    $('.header_My').css('display','none');
    $('.header_app').css('display','none');
    $('.searcha_box').css('display','block');
    $('.header-search').css({'marginLeft':'0','width':"7.4rem"});
    $('.searcha_text').focus(function(){
        $('.scarcha_text').css('color',"#ffffff");
        $(this).keydown(function(){
            $('.iconc').css('opacity','1');
            $('.searcha_btn a').text("搜索");
        })
    });
    $('.searcha_btn a').bind('touchstart',function(event){
        event.preventDefault();
        $('.searcax').css('display','none');
        $('.searcha_box').css('display','none');
        $('.header_searcha').css('display','block');
        $('.header_Record').css('display','block');
        $('.header_My').css('display','block');
        $('.header_app').css('display','block');
        $('.header_search').css({'marginLeft':'','width':""});
    });
    $('.searcha_text').blur(function(){
        $('.searcha_text').css('color',"#999999");
        $('.iconc').css('opacity','0');
    });
    $('.iconc').bind('touchstart',function(event){
        event.preventDefault();
        $('.searcha_text').val("");
        $('.iconc').css('opacity','0');
        $('.searcha_btn a').text("取消");
    });
});
$('.m-search-input').bind('touchstart',function(event){
    event.preventDefault();
    $('.header_searcha').css('display','none');
    $('.searcax').css('display','block');
    $('.header_Record').css('display','none');
    $('.header_My').css('display','none');
    $('.header_app').css('display','none');
    $('.searcha_box').css('display','block');
    $('.header-search').css({'marginLeft':'0','width':"7.4rem"});
});
//搜索内容
$('.searcax').height(clien-3.7+'rem');
$('.searcax').bind('touchstart',function(event){
    event.preventDefault();
});
$('.m-user').bind('touchmove',function(event){
    event.preventDefault();
});
//换一批
var axzk=true;
$('.m-link').bind('touchstart',function(event){
    event.preventDefault();
    if(axzk){
        $('.yc1').css('display',"none");
        $('.yc2').css('display',"block");
        axzk=false;
    }else{
        $('.yc2').css('display',"none");
        $('.yc1').css('display',"block");
        axzk=true;
    }
});