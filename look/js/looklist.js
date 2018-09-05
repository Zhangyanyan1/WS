/**
 * Created by MyPC on 2018/8/14.
 */
var look_con_ul = document.getElementsByClassName('look_con_ul')[0];
var look_ulgs = document.getElementsByClassName('look_ulgs')[0];
var textSeveral = document.getElementsByClassName('textSeveral')[0];
var alternant = document.getElementsByClassName('alternant')[0];
var looktt = document.getElementsByClassName('looktt')[0];
var look_divbj = document.getElementsByClassName('look_divbj')[0];
var look_divcg = document.getElementsByClassName('look_divcg')[0];
var look_cjdiv_zcj = document.getElementsByClassName('look_cjdiv_zcj')[0];
var getJson = 'data.json';
var textT = 0;
var textZ = 0;
var x = 0;
var w = 0;
var time = 0;
var several=[];
var timeList;

censorship();
function censorship(){
    var str = '';
    for(var i=0;i<5;i++){
        str += '<li onclick="subjectListcj('+i+');"><a href="#look_div"><p>'+(i+1)+'</p></a></li>';
    }
    look_ulgs.innerHTML=str;
}
//subjectListcj(x);
function subjectListcj(x){
    $(".progress_nei").css({width:140});
    w=0;
    time=0;
    timeList=setInterval(function(){
        time++;
        w = Math.floor(140/16*time);
        $(".progress_nei").animate({width:140-w},500);
        if(time>16){
            clearInterval(timeList);
            $(".look_divbj").css({zIndex:1});
            look_cjdiv_zcj.innerText=textZ;
        }
    },500);
    this.x=x;
    textT = 0;
    textSeveral.innerText=textT;
    alternant.innerText=x+1;
    looktt.innerText=0;
    several=[true,true,true,true,true];
    $.ajax({
        type: "post",
        url: getJson,
        data: {},
        dataType: 'json',
        success: function(data){
            topicCjData(data,x);
        },
        error: function(data){

        }
    });
}
function topicCjData(data,x){
    var lookList = data.look_list;
    //console.log(lookList[0].one);
    var str = '<li class="float-l">'+lookList[x].text+'</li>';
         str += '<li class="float-r">'+lookList[x].one+'<span onclick="dataList(this,1)">'+lookList[x].twof+'</span>';
         str += lookList[x].three+'<span onclick="dataList(this,2)">'+lookList[x].fourf+'</span>';
         str += lookList[x].five+'<span onclick="dataList(this,3)">'+lookList[x].sixf+'</span>';
         str += lookList[x].seven+'<span onclick="dataList(this,4)">'+lookList[x].eightf+'</span>';
         str += lookList[x].nine+'<span onclick="dataList(this,5)">'+lookList[x].tenf+'</span>';
         str += lookList[x].eleven+'</li>';
    look_con_ul.innerHTML=str;
}
function dataList(o,t){
    $.ajax({
        type: "post",
        url: getJson,
        data: {},
        dataType: 'json',
        success: function (data) {
            if(several[t-1]){
                textT++;
                dataText(o,t,data);
                several[t-1]=false;
            }
        },
        error: function (data) {

        }
    });
}
function dataText(o,t,text){
    var single = text.look_list[x].single;
    var twot = text.look_list[x].twot;
    var fourt = text.look_list[x].fourt;
    var sixt = text.look_list[x].sixt;
    var eightt = text.look_list[x].eightt;
    var tent = text.look_list[x].tent;
    switch (t){
        case 1:
            dataTextSeveral(o,twot,single);
            break;
        case 2:
            dataTextSeveral(o,fourt,single);
            break;
        case 3:
            dataTextSeveral(o,sixt,single);
            break;
        case 4:
            dataTextSeveral(o,eightt,single);
            break;
        case 5:
            dataTextSeveral(o,tent,single);
            break;
    }
}
function dataTextSeveral(o,ee,single){
    o.innerText =ee;
    o.style.border="1px solid #f00";
    textSeveral.innerText=textT;
    textZ=single*textT;
    looktt.innerText=textZ;
    if(textT==5){
        x++;
        clearInterval(timeList);
        look_divcg.style.zIndex=1;
    }
}
function lookExit(){
    move(look_con_ul,'opacity',0,function(){
        subjectListcj(x);
        move(look_con_ul,'opacity',100);
    });
}
//下一关
function lookNext(){
    look_divcg.style.zIndex=-1;
    if(x<5){
        move(look_con_ul,'opacity',0,function(){
            $(".progress_nei").css({width:140});
            subjectListcj(x);
            move(look_con_ul,'opacity',100);
        });
    }else{
        window.location.href="#look_divgs";
    }
}
//继续做题
function lookJixu(){
    look_divbj.style.zIndex=-1;
    move(look_con_ul,'opacity',0,function(){
        $(".progress_nei").css({width:140});
        subjectListcj(0);
        move(look_con_ul,'opacity',100);
    });
}

function tiuchu(){
    clearInterval(timeList);
}

function lookTiuchu(){
    clearInterval(timeList);
    look_divbj.style.zIndex=-1;
}
