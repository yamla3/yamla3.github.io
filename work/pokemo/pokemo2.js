window.onload=init;
	var guess=1;
	var guessto=0.3;
	var guessright=0.3;
	function test(obj){
		var image=document.getElementById("zero");
        if(guess<10){
		image.src="images/"+guess+".jpg";
		}
		var gg=obj.value;
		if(
		gg==guess){guessright=guessright+10;
		}
		
			guess++;
			if(guessto<100){
			guessto=guessto+10;}
			init();
	}
	  var speed1 =0.1;
	  var speed2 =0.1;
	  function init(){
	   var canvas1 = document.getElementById('canvas1'),
        context1 = canvas1.getContext('2d'),
		
		canvas2 = document.getElementById('canvas2'),
        context2 = canvas2.getContext('2d'),
      
        centerX = canvas1.width/2,  
        centerY = canvas1.height/2,  
        rad = Math.PI*2/100;
       
  

	var timer1 = setInterval(function () {
                speed1 += 0.1;
                if(speed1 > guessto){
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
                if(speed2 > guessright){
                    clearInterval(timer2);
                    return false;
                }
                context2.clearRect(0, 0, canvas2.width, canvas2.height);
                blueCircle(context2);
                text(context2,speed2);
                whiteCircle(context2,speed2);
            },10);




    function whiteCircle(context,n){
        context.save();
        context.strokeStyle = "#FFF"; 
        context.lineWidth = 15; 
        context.beginPath();
        context.arc(centerX, centerY, 114 , -Math.PI/2, -Math.PI/2 - n*rad, true); 
        context.stroke();
        context.closePath(); 
        context.restore();
    }
    
    function blueCircle(context){
        context.save();
        context.fillStyle="#BEBEBE";
        context.lineWidth=15;
        context.strokeStyle = "#aaa";
        context.beginPath();
        context.arc(centerX,centerY,114,0,2*Math.PI,false);
        context.fill();
        context.stroke();
        context.restore();
    }
    
    function text(context,n){
        context.save(); 
        context.fillStyle = "#fff"; 
        context.font = "62px arial"; 
        
        context.fillText(n.toFixed(0)+"%", centerX-53, centerY+20);
        context.restore();
    }
	  }