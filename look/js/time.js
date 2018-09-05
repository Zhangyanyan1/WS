/**
 * Created by lenovo on 2018/7/30.
 */

i = 0;
j = 0;
count = 0;
MM = 0;
SS = 10;  // �? 90s
MS = 0;
totle = (MM+1)*600+1;
d = 180*(MM+1);
MM = "0" + MM;
var gameTime = 10;
//count down
var showTime = function(){
    totle--;
    if (totle == 0) {
        clearInterval(s);
        clearInterval(t1);
        //$(".pie1").css({clip: rect(0,66,66,33)});
        //$(".pie1").css({clip: rect(0,33,66,0)});
        //clip:rect(0px,66px,66px,33px);
        optionList(false);
        //ifNext();
    } else {
        if (totle > 0 && MS > 0) {
            MS = MS - 1;
            //if (MS < 10) {
            //    MS = "0" + MS
            //}
        }
        if (MS == 0 && SS > 0) {
            MS = 10;
            SS = SS - 1;
            //if (SS < 10) {
            //    SS = "0" + SS
            //}
        }
        if (SS == 0 && MM > 0) {
            SS = 60;
            MM = MM - 1;
            //if (MM < 10) {
            //    MM = "0" + MM
            //}
        }
    }
    $(".time").html(SS);

};

var start1 = function(){
    //i = i + 0.6;
    i = i + 360/((gameTime)*10);  //旋转的角�?  90s �? 0.4  60s�?0.6
    count = count + 1;
    if(count <= (gameTime/2*10)){  // 丢�半的角度  90s �? 450
        $(".pie1").css("-o-transform","rotate(" + i + "deg)");
        $(".pie1").css("-moz-transform","rotate(" + i + "deg)");
        $(".pie1").css("-webkit-transform","rotate(" + i + "deg)");
    }else{
        $(".pie2").css("backgroundColor", "#fff");
        $(".pie2").css("-o-transform","rotate(" + i + "deg)");
        $(".pie2").css("-moz-transform","rotate(" + i + "deg)");
        $(".pie2").css("-webkit-transform","rotate(" + i + "deg)");
    }
};

var start2 = function(){
    j = j + 0.6;
    count = count + 1;
    if (count == 300) {
        count = 0;
        clearInterval(t2);
        t1 = setInterval("start1()", 100);
    }
    $(".pie2").css("-o-transform","rotate(" + j + "deg)");
    $(".pie2").css("-moz-transform","rotate(" + j + "deg)");
    $(".pie2").css("-webkit-transform","rotate(" + j + "deg)");
};

var countDown = function() {
    //80*80px 时间进度�?
    i = 0;
    j = 0;
    count = 0;
    MM = 0;
    SS = gameTime;
    MS = 0;
    totle = (MM + 1) * gameTime * 10+1;
    d = 180 * (MM + 1);
    MM = "0" + MM;
    $(".pie1").css("-o-transform","rotate(0deg)");
    $(".pie1").css("-moz-transform","rotate(0deg)");
    $(".pie1").css("-webkit-transform","rotate(0deg)");
    $(".pie2").css("backgroundColor", "#ff5988");
    $(".pie2").css("-o-transform","rotate(0deg)");
    $(".pie2").css("-moz-transform","rotate(0deg)");
    $(".pie2").css("-webkit-transform","rotate(0deg)");
    showTime();

    s = setInterval("showTime()", 100);
    start1();
    //start2();
    t1 = setInterval("start1()", 100);
};