  var canvas1 = document.getElementById('canvas1'),
        context1 = canvas1.getContext('2d'),
        canvas2 = document.getElementById('canvas2'),
        context2 = canvas2.getContext('2d'),
        canvas3 = document.getElementById('canvas3'),
        context3 = canvas3.getContext('2d'),
        canvas4 = document.getElementById('canvas4'),
        context4 = canvas4.getContext('2d'),
        centerX = canvas1.width/2,  
        centerY = canvas1.height/2,  
        rad = Math.PI*2/100, 
        speed1 = 0.1; 
        speed2 = 0.1;
        speed3 = 0.1;
        speed4 = 0.1;

var timer1 = setInterval(function () {
                speed1 += 0.15;
                if(speed1> 60 ){
                    clearInterval(timer1);
                    return false;
                }
                context1.clearRect(0, 0, canvas1.width, canvas1.height);
                blueCircle(context1);
                text(context1,speed1);
                whiteCircle(context1,speed1);
            },10);

var timer2 = setInterval(function () {
                speed2 += 0.1;
                if(speed2 > 40){
                    clearInterval(timer2);
                    return false;
                }
                context2.clearRect(0, 0, canvas2.width, canvas2.height);
                blueCircle(context2);
                text(context2,speed2);
                whiteCircle(context2,speed2);
            },10);

var timer3 = setInterval(function () {
                speed3 += 0.1;
                if(speed3 > 40){
                    clearInterval(timer3);
                    return false;
                }
                context3.clearRect(0, 0, canvas3.width, canvas3.height);
                blueCircle(context3);
                text(context3,speed3);
                whiteCircle(context3,speed3);
            },10);

var timer4 = setInterval(function () {
                speed4 += 0.09;
                if(speed4 > 30){
                    clearInterval(timer4);
                    return false;
                }
                context4.clearRect(0, 0, canvas4.width, canvas4.height);
                blueCircle(context4);
                text(context4,speed4);
                whiteCircle(context4,speed4);
            },10);

//畫外圈
    function whiteCircle(context,n){
        context.save();
        context.strokeStyle = "#FFF"; //描邊樣式
        context.lineWidth = 15; //線寬
        context.beginPath(); //路徑開始
        context.arc(centerX, centerY, 114 , -Math.PI/2, -Math.PI/2 - n*rad, true); //(x座標，y座標，半徑，起始角度，終止角度，順/逆時針)
        context.stroke(); //繪製
        context.closePath(); //路徑結束
        context.restore();
    }
    //藍色內圈
    function blueCircle(context){
        context.save();
        context.fillStyle="#BEBEBE";
        context.lineWidth=15;
        context.strokeStyle = "#aaa";
        context.beginPath();
        context.arc(centerX,centerY,114,0,2*Math.PI,false);//順時針
        context.fill();
        context.stroke();
        context.restore();
    }
    //百分比文字
    function text(context,n){
        context.save(); //save和restore保證該段屬性只用在該canvas元素
        context.fillStyle = "#fff"; //描邊樣式
        context.font = "62px arial"; //设置字体大小和字体
        //繪製字體和指定位置
        context.fillText(n.toFixed(0)+"%", centerX-53, centerY+20);
        context.restore();
    }