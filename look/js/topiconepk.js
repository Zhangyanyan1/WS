/**
 * Created by lenovo on 2018/8/1.
 */
//等级
var zp = document.getElementById('zp');

var one_score_ul = document.getElementsByClassName('one_score_ul')[0];
var one_score_pl = document.getElementsByClassName('one_score_pl')[0];
var one_score_pr = document.getElementsByClassName('one_score_pr')[0];

var score_imga = document.getElementsByClassName('score_imga');
var score_imgb = document.getElementsByClassName('score_imgb');
var score_imgc = document.getElementsByClassName('score_imgc');
var score_imgd = document.getElementsByClassName('score_imgd');

//分数
var scorecA = document.getElementById('scorecA');
var scorecB = document.getElementById('scorecB');

//匹配
var one_ul = document.getElementsByClassName('one_ul')[0];
var one_imgl = document.getElementsByClassName('one_imgl');
var one_imgr;
var one_spana = document.getElementById('one_spana');
var one_spanb;
var one_p = document.getElementsByClassName('one_p');

//得分结束页
var onecj_ul = document.getElementsByClassName('onecj_ul')[0];
var one_cjul = document.getElementsByClassName('one_cjul')[0];

var one_score_lia;
var one_score_lib;
var one_score_lic;
var one_score_lid;

var getJson = 'data.json';
var dianji=true;
var allow=true;
var scorecaa=0;
var scorecbb=0;
var jiascore=18;
var tishu = [];
var tishuTopic = [];
var tishuTopicb = [];
var lian = 0;
var timeList;
var timeListTop;
var dijiguan=0;

var self_nickname = '';
var self_headimg = '';
var target_nickname = '';
var target_headimg = '';

var time;
var time2;

var t=0;
var n=0;

var getIndex = 'http://47.105.79.50/game/pk/index';
var getIndexPp = 'http://47.105.79.50/game/pk/mate';
var getStart = 'http://47.105.79.50/game/pk/start';
//遍历去重数组

function tisShu(){
    while(tishu.length<6){
        var zou = true;
        lian=Math.floor(Math.random()*10);
        for(var i=0;i<tishu.length+1;i++){
            if(tishu[i]==lian){
                zou=false;
            }
        }
        if(zou){
            tishu[tishu.length]=lian;
        }
    }
}

levelData();
//等级页
function levelData(){
    $.ajax({
        type:"get",
        url: getJson,
        data: {
            //uid:2
        },
        dataType: 'json',
        success: function(data){
            //console.log(data);
            OhomePage(data);
        },
        error: function(data){

        }
    });
}
function OhomePage(obj){
    //var songArr = obj.retinfo;
    var str ='<li id="zpname" class="pkname">';
        str +='<div class="zp_div">';
        str += '<p><img src="img/bb.jpg"></p>';
        //str += '<h3>'+songArr.nickname+'</h3>';
        str += '<h3>look曙光</h3>';
        //str += '<h4>'+songArr.score+'</h4>';
        str += '<h4>33333</h4>';
        str += '</div>';
        str += '</li>';
    //for(var i = 0; i < songArr.data.length; i++){
    for(var i = 0; i < 8; i++){
        //str +='<li onclick="subjectListPp('+i+');"><a href="#nav_one"><p>'+songArr.data[i].title+'</p></a></li>';
        str +='<li onclick="subjectListPp('+i+');"><a href="#nav_one"><p>等级'+(i+1)+'</p></a></li>';
    }
    zp.innerHTML += str;
    //self_nickname = songArr.nickname;
    //self_nickname = songArr.nickname;
    self_headimg = '';
}


//匹配页
function subjectListPp(z){
    $(".nav_level").css({display:'none'});
    $(".bodypk").css({display:'block'});
    //this.t=t;
    //console.log(t);
    $(".one_spana").innerHTML="ccc";
    $.ajax({
        type:"get",
        url: getJson,
        data: {
            //uid:2,
            //type:2
        },
        dataType: 'json',
        success: function(data){
            topicInterval(data);
        },
        error: function(data){

        }
    });
}

function topicInterval(data){
    dijiguan=0;
    tishu=[];
    tisShu();
    var songArr=data.song_list;
    var str ='<li id="one_diva" class="one_li">';
    str += '<p class="yil"></p>';
    str += '<p class="one_divl"><img class="one_imgl" src="img/bb.jpg" alt=""/></p>';
    //str += '<span id="one_spana" class="one_span">'+self_nickname+'</span>';
    str += '<span id="one_spana" class="one_span">'+songArr[0].name+'</span>';
    str += ' </li>';
    str += '<li>';
    str += ' <p><img src="img/vs.png"/></p>';
    str += ' </li>';
    str += ' <li id="one_divb">';
    str += ' <p class="yir"></p>';
    str += ' <p class="one_divr"><img class="one_imgr" src="img/zwtp.png" alt=""/></p>';
    str += ' <span id="one_spanb" class="one_span"></span>';
    str += '</li>';
    str += '<li>';
    str += '<p><img class="one_p" src="img/noone.png" alt=""></p>';
    str += '</li>';
    one_ul.innerHTML = str;
    one_imgr = document.getElementsByClassName('one_imgr');
    one_spanb = document.getElementById('one_spanb');
    //var tom=true;
    time=setInterval(function(){
        //var songArr=data.retinfo;
        //if(data.retval ==="OK"){
        //    OhomePagePp(songArr);
            OhomePagePp();
            time2=setInterval(function(){
                window.location.href="#navpk";
                subjectList(tishu[dijiguan]);
                clearInterval(time2);
            },1000);
            clearInterval(time);
        //}
    },1000);

}
function OhomePagePp(){
    //one_spanb.innerHTML=obj.nickname;
    one_spanb.innerHTML="look曙光";
    //one_imgr.item(0).src=obj.headimg;
    one_imgr.item(0).src="img/cc.jpg";
    //target_nickname = obj.nickname;
    target_headimg = '';
    one_p.item(0).src='img/match.png';
    $(".one_p").css({width: 120,height: 60});
    $("#one_diva").css({left:20});
    $("#one_divb").css({right:20});
}



 //PK做题页
 function subjectList(n){
     this.n=n;
     dijiguan++;
     $(".one_score_ul li").css({backgroundColor:'#999'});
     move(one_score_ul,'opacity',100);
     dianji=true;
     one_score_ul.innerHTML = '';
     $.ajax({
         type: "post",
         url: getJson,
         data: {
             //uid:2,
             //level:2,
             //qid:2
         },
         dataType: 'json',
         success: function (data) {
             //levelList(data);
             topicData(data);
         },
         error: function (data) {

         }
     });
}

function levelList(data){
    var songArr;
    switch (t){
        case 0:
            songArr = data.song_list;
            subjectListPp(songArr);
            break;
        case 1:
            songArr = data.song_list;
            subjectListPp(songArr);
            break;
        case 2:
            songArr = data.song_list;
            subjectListPp(songArr);
            break;
        case 3:
            songArr = data.song_list;
            subjectListPp(songArr);
            break;
        case 4:
            songArr = data.song_list;
            subjectListPp(songArr);
            break;
        case 5:
            songArr = data.song_list;
            subjectListPp(songArr);
            break;
    }
}


function topicData(data){
    one_score_ul.innerHTML='';
    var topicList = data.topic_list;
    console.log(data);
    //console.log(topicList);
    //var str =  '<li>'+topicList.question+'</li>';
    var str =  '<li>'+topicList[n].title+'</li>';
        str +=   '<li class="one_score_lia" onclick="oneScoreLla(1,this)">';
        //str +=  '<p><img class="score_imga" src="" alt=""/></p>'+topicList.answer1+'<p><img class="score_imga" src="" alt=""/></p></li>';
        str +=  '<p><img class="score_imga" src="" alt=""/></p>'+topicList[n].a+'<p><img class="score_imga" src="" alt=""/></p></li>';
        str +=   '<li class="one_score_lib" onclick="oneScoreLla(2,this)">';
        //str +=  '<p><img class="score_imgb" src="" alt=""/></p>'+topicList.answer2+'<p><img class="score_imgb" src="" alt=""/></p></li>';
        str +=  '<p><img class="score_imgb" src="" alt=""/></p>'+topicList[n].b+'<p><img class="score_imgb" src="" alt=""/></p></li>';
        str +=   '<li class="one_score_lic" onclick="oneScoreLla(3,this)">';
        str +=  '<p><img class="score_imgc" src="" alt=""/></p>'+topicList[n].c+'<p><img class="score_imgc" src="" alt=""/></p></li>';
        str +=   '<li class="one_score_lid" onclick="oneScoreLla(4,this)">';
        str +=  '<p><img class="score_imgd" src="" alt=""/></p>'+topicList[n].t+'<p><img class="score_imgd" src="" alt=""/></p></li>';
    one_score_ul.innerHTML = str;
    one_score_lia = document.getElementsByClassName('one_score_lia')[0];
    one_score_lib = document.getElementsByClassName('one_score_lib')[0];
    one_score_lic = document.getElementsByClassName('one_score_lic')[0];
    one_score_lid = document.getElementsByClassName('one_score_lid')[0];
    countDown();
}
function oneScoreLla(st,o){
    switch (st){
        case 1:
            if(dianji){
                optionList(true,score_imga,o);
                dianji=false;
            }
            break;
        case 2:
            if(dianji){
                optionList(true,score_imgb,o);
                dianji=false;
            }
            break;
        case 3:
            if(dianji){
                optionList(true,score_imgc,o);
                dianji=false;
            }
            break;
        case 4:
            if(dianji){
                optionList(true,score_imgd,o);
                dianji=false;
            }
            break;
    }
}
function optionList(tt,obj,o){
    $.ajax({
        type: "post",
        url: getJson,
        data: {

        },
        dataType: 'json',
        success: function (data) {
            bianMei(tt,data,obj,o);
        },
        error: function (data) {
        }
    });
}

function bianMei(tt,data,obj,o){
    var topicList = data.topic_list;
    if(tt){
        if(o.innerText==topicList[n].t){
            obj.item(0).src="img/dui.png";
            scorecaa+=topicList[n].score;
            tishuTopic[dijiguan-1] = true;
            o.style.backgroundColor= "#cbc7cc";
        }else{
            obj.item(0).src="img/cuo.png";
            tishuTopic[dijiguan-1] = false;
            o.style.backgroundColor= "#cbc7cc";
        }
    }
    console.log(tishuTopic);
    ifNext(data);
}
function ifNext(data){
    var topicList = data.topic_list;
    var songList = data.song_list;
    switch (topicList[n].rival){
        case topicList[n].a:
            rivalOn(score_imga,data);
            $(".one_score_lia").css({backgroundColor:'#cbc7cc'});
            break;
        case topicList[n].b:
            rivalOn(score_imgb,data);
            $(".one_score_lib").css({backgroundColor:'#cbc7cc'});
            break;
        case topicList[n].c:
            rivalOn(score_imgc,data);
            $(".one_score_lic").css({backgroundColor:'#cbc7cc'});
            break;
        case topicList[n].d:
            rivalOn(score_imgd,data);
            $(".one_score_lid").css({backgroundColor:'#cbc7cc'});
            break;
    }
    move(one_score_pl,'height',Math.ceil(400/jiascore*scorecaa));
    scorecA.innerText=scorecaa;
    move(one_score_pr,'height',Math.ceil(400/jiascore*scorecbb));
    scorecB.innerText=scorecbb;
    //scorecB.innerText=songList[0].scoreclist.replace(/^0/,'');

    switch (topicList[n].t){
        case topicList[n].a:
            $(".one_score_lia").css({backgroundColor:'#cbc7cc'});
            break;
        case topicList[n].b:
            $(".one_score_lib").css({backgroundColor:'#cbc7cc'});
            break;
        case topicList[n].c:
            $(".one_score_lic").css({backgroundColor:'#cbc7cc'});
            break;
        case topicList[n].d:
            $(".one_score_lid").css({backgroundColor:'#cbc7cc'});
            break;
    }
    allow=true;
    ifColor(".one_score_lia",one_score_lia);
    ifColor(".one_score_lib",one_score_lib);
    ifColor(".one_score_lic",one_score_lic);
    ifColor(".one_score_lid",one_score_lid);
}
function rivalOn(obj,text){
    var topicList = text.topic_list;
    var songList = text.song_list;

    if(topicList[n].rival==topicList[n].t){
        obj.item(1).src="img/dui.png";
        //songList[0].scoreclist+=topicList[n].score;
        scorecbb+=topicList[n].score;
        tishuTopicb[dijiguan-1] = true;
    }else{
        obj.item(1).src="img/cuo.png";
        tishuTopicb[dijiguan-1] = false;
    }
}
function ifColor(obj,classT){
    if($(obj).css("background-color")==='rgb(255, 255, 255)'){
        move(classT,'opacity',0,function(){
            if(allow){
                clearInterval(s);
                clearInterval(t1);
                opacityOn();
                allow = false;
            }
        });
    }
}
function opacityOn(){
    move(one_score_ul,'opacity',0,function(){
        if(tishu.length>dijiguan){
            subjectList(tishu[dijiguan]);
        }else{
            window.location.href="#topiconecj";
            subjectListcj();
        }
    })
}
//subjectListcj();
function subjectListcj(){
    $.ajax({
        type: "post",
        url: getJson,
        data: {},
        dataType: 'json',
        success: function (data) {
            topicCjData(data);
        },
        error: function (data) {

        }
    });
}
//console.log(tishu);
function topicCjData(data){
    var songList = data.song_list;
    var topicList = data.topic_list;
    var stri = '';
         stri += '<li><p><img class="imgw" src="'+songList[0].img+'" alt=""/></p>';
             stri += '<span id="onepknamea">'+songList[0].name+'</span>';
             stri += '<br/><br/>';
             stri += '<span id="onepkscorea">'+scorecaa+'</span>';
         stri += '</li>';
         stri += '<li>';
             if(scorecaa>=scorecbb){
                 stri += '<img src="img/win.png" alt=""/>';
             }else{
                 stri += '<img src="img/lose.png" alt=""/>';
             }
         stri += '</li>';
         stri += '<li><p><img class="imgt" src="'+songList[1].img+'" alt=""/></p>';
             stri += '<span id="onepknameb">'+songList[1].name+'</span>';
             stri += '<br/><br/>';
             stri += '<span id="onepkscoreb">'+scorecbb+'</span>';
         stri += '</li>';
    onecj_ul.innerHTML = stri;
    var str = '';
    for(var i=0;i<6;i++){
        str += '<li><p>';
        if(tishuTopic[i]){
            str +=  '<img src="img/dui.png" alt=""/>';
        }else{
            str +=  '<img src="img/cuo.png" alt=""/>';
        }
        str +=  '</p><p>'+topicList[tishu[i]].title+'</p><p>'+topicList[tishu[i]].t+'</p><p>' ;
        if(tishuTopicb[i]){
            str +=  '<img src="img/dui.png" alt=""/>';
        }else{
            str +=  '<img src="img/cuo.png" alt=""/>';
        }
        str +=  '</p></li>';
    }
    one_cjul.innerHTML = str;
}
//console.log(tishuTopic);
function fanhuiPk(){
    $(".nav_level").css({display:'block'});
    $(".bodypk").css({display:'none'});
    one_spanb.innerHTML='';
    one_imgr.item(0).src='img/zwtp.png';
    one_p.item(0).src='img/noone.png';
    //one_p.innerHTML="MATCH!";
    $(".one_p").css({width: 100,height: 50});
    $("#one_diva").css({left:0});
    $("#one_divb").css({right:0});
    $(".one_score_pl").css({height: 0});
    $(".one_score_pr").css({height: 0});
    scorecaa=0;
    scorecbb=0;
    scorecA.innerText=scorecaa;
    scorecB.innerText=scorecbb;
    tishuTopic=[];
    tishuTopicb=[];
}