window.onload=init;
var guess=0

function init() {
	var guessButton=document.getElementsByClassName("Button");
	for (var i=0; i<guessButton.length; i++){
	guessButton[i].onclick=showAnswer1;}
	
	var guessButton=document.getElementsByClassName("Button2");
	for (var i=0; i<guessButton.length; i++){
	guessButton[i].onclick=showAnswer2;}
	
	var guessButton=document.getElementsByClassName("Button3");
	for (var i=0; i<guessButton.length; i++){
	guessButton[i].onclick=showAnswer3;}
	
}

function showAnswer1(obj){
	var button=obj.target;
	var name=button.id;
	wrongpage();
	
	if (name=="0") {
	var image=document.getElementById("zero");
	image.src="zero.jpg";
	setTimeout(reblur,1500,image);
	}
	else {
	var image=document.getElementById("zero");
	image.src="妙蛙.jpg";
	setTimeout(reblur,1500,image);
	}
}


function showAnswer2(obj){
	var button=obj.target;
	var name=button.id;
	wrongpage();
	
	if (name=="1"){
	var image=document.getElementById("one");
	image.src="one.jpg";
	setTimeout(reblur,1500,image);
	}
	else {
	var image=document.getElementById("one");
	image.src="皮卡丘.jpg";
	setTimeout(reblur,1500,image);
	}
}

function showAnswer3(obj){
	var button=obj.target;
	var name=button.id;
	wrongpage();
	
	if (name=="2"){
	var image=document.getElementById("two");
	image.src="two.jpg";
	setTimeout(reblur,1500,image);
	}
	else {
	var image=document.getElementById("two");
	image.src="超夢.jpg";
	setTimeout(reblur,1500,image);
	}
}


function reblur(image){
	var name=image.id;
	name=name+"blur.jpg";
	image.src=name;
    
}

function wrongpage(){
	
	var img=document.createElement("img");
	img.setAttribute("id",guess)
	var div=document.getElementById("aaa");
	div.appendChild(img);
	var gg=document.getElementById(guess);
	gg.src="wrong.jpg";
	
	if (guess<8) {
	guess=guess+1;
	}
	else {
		alert("進入正常版?");
		var abc=document.getElementById("turn");
		
		abc.click();
	}
}
