/**
 * Created by MyPC on 2018/8/14.
 */
var alternant = document.getElementsByClassName('alternant')[0];
var looktt = document.getElementsByClassName('looktt')[0];
var rush_ul = document.getElementsByClassName('rush_ul')[0];
var look_divcg = document.getElementsByClassName('look_divcg')[0];
var rush_cjdiv_zcj = document.getElementsByClassName('rush_cjdiv_zcj')[0];


var rush_img = document.getElementsByClassName('rush_img');

var getJson = 'data.json';
var allow=true;   //只走一遍ic
var dianji=true;
var ti=true;
var z=0; //第几关
var x=0;  //第几题

var topict=0;  //得分


var neiw = 0;   //进度条宽度
var neiTime = 0;  //时间
var timeList;    //定时器


function newList(z){
    this.z=z;
    $(".back").css({display:'none'});
    topict=0;
    looktt.innerText=topict;
    alternant.innerText=(z+1);
    $(".progress_nei").css({width:140});
    neiw=0;
    neiTime=0;
    timeList=setInterval(function(){
        neiTime++;
        neiw = Math.floor(140/32*neiTime);
        $(".progress_nei").animate({width:140-neiw},500);
        if(neiTime>32){
            clearInterval(timeList);
            $(".look_divbj").css({zIndex:1});
            rush_cjdiv_zcj.innerText=topict;
        }
    },500);
    subjectListRush(0);
}

//censorship();
//function censorship(){
//    var str = '';
//    for(var i=0;i<5;i++){
//        str += '<li onclick="subjectListcj('+i+');"><a href="#look_div"><p>'+(i+1)+'</p></a></li>';
//    }
//    look_ulgs.innerHTML=str;
//}

//subjectListRush(x);
function subjectListRush(x){
    this.x=x;
    dianji=true;
    move(rush_ul,'opacity',100);
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
function topicCjData(data){
    rush_ul.innerHTML='';
    var rushList = data.rush_list;
    var str ='<li>'+rushList[x].title+'</li>';
    str +=   '<li class="one_score_lia" onclick="oneScoreLla(1,this,'+x+')">'+rushList[x].a+'</li>';
    str +=   '<li class="one_score_lib" onclick="oneScoreLla(2,this,'+x+')">'+rushList[x].b+'</li>';
    str +=   '<li class="one_score_lic" onclick="oneScoreLla(3,this,'+x+')">'+rushList[x].c+'</li>';
    str +=   '<li class="one_score_lid" onclick="oneScoreLla(4,this,'+x+')">'+rushList[x].d+'</li>';
    rush_ul.innerHTML = str;
}

function oneScoreLla(t,o){
    //clearInterval(timeList);
     switch (t) {
         case 1:
             if(dianji){
                 rushList(o);
                 dianji=false;
             }
             break;
         case 2:
             if(dianji){
                 rushList(o);
                 dianji=false;
             }
             break;
         case 3:
             if(dianji){
                 rushList(o);
                 dianji=false;
             }
             break;
         case 4:
             if(dianji){
                 rushList(o);
                 dianji=false;
             }
             break;
     }
}
function rushList(o){
    one_score_lia = document.getElementsByClassName('one_score_lia')[0];
    one_score_lib = document.getElementsByClassName('one_score_lib')[0];
    one_score_lic = document.getElementsByClassName('one_score_lic')[0];
    one_score_lid = document.getElementsByClassName('one_score_lid')[0];
    $.ajax({
        type: "post",
        url: getJson,
        data: {},
        dataType: 'json',
        success: function(data){
            rushData(data,o);
        },
        error: function(data){

        }
    });
}
function rushData(data,o){
    var rushList = data.rush_list;
    if(rushList[x].t== o.innerText){
        ti=true;
        o.style.backgroundColor="#15F0FF";
        topict+=rushList[x].score;
        looktt.innerText=topict;
    }else{
        ti=false;
        o.style.backgroundColor="#bbb";
        switch (rushList[x].t){
            case rushList[x].a:
                $(".one_score_lia").css({backgroundColor:'#15F0FF'});
                break;
            case rushList[x].b:
                $(".one_score_lib").css({backgroundColor:'#15F0FF'});
                break;
            case rushList[x].c:
                $(".one_score_lic").css({backgroundColor:'#15F0FF'});
                break;
            case rushList[x].d:
                $(".one_score_lid").css({backgroundColor:'#15F0FF'});
                break;
        }
    }
    allow=true;
    ifColor(".one_score_lia",one_score_lia,data);
    ifColor(".one_score_lib",one_score_lib,data);
    ifColor(".one_score_lic",one_score_lic,data);
    ifColor(".one_score_lid",one_score_lid,data);
}
function ifColor(obj,score,data){
    var songArr = data.song_list;
    if($(obj).css("background-color")==='rgb(255, 255, 255)'){
        move(score,'opacity',0,function(){
            if(allow){
                if(ti){
                    //$(".look_divcg").css({zIndex:1});
                    lookNext();
                }else{
                    $(".look_divbj").css({zIndex:1});
                    rush_cjdiv_zcj.innerText=topict;
                }
                allow = false;
            }
        });
    }
}
function lookNext(){
    //$(".look_divcg").css({zIndex:-1});
        move(rush_ul,'opacity',0,function(){
            x++;
            if(x<6){
                subjectListRush(x);
            }else{
                clearInterval(timeList);
                $(".look_divcg").css({zIndex:1});
            }
        })
}
function lookJixu(){
    clearInterval(timeList);
    $(".progress_nei").css({width:140});
    $(".look_divbj").css({zIndex:-1});
    move(rush_ul,'opacity',0,function(){
        newList(z);
        topict = 0;
        looktt.innerText=topict;
    })
}
function tuichu(){
    clearInterval(timeList);
    $(".back").css({display:'block'});
}
function rushNext(){
    $(".look_divcg").css({zIndex:-1});
    z++;
    if(z<6){
        newList(z);
    }else{
        //$(".nav_canvas").css({display:'block'});
        //$(".nav_start").css({display:'none'});
        //window.location.href="#topiconecj";
    }
    //$(".back").css({display:'block'});
}
function fanhui(){
    $(".back").css({display:'block'});
    $(".look_divbj").css({zIndex:-1});
}