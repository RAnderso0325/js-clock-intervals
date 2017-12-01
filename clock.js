var secondHand = document.getElementById("second");
var minuteHand = document.getElementById("minute");
var hourHand = document.getElementById("hour");
var clockFace = document.getElementById("face");
var crazy=0;

function setSecond(s){
	var secondDegrees = s*6;
	secondHand.style.transform = "rotate(" + secondDegrees + "deg)";
}

function setMinute(m,s){
	var minuteDegrees = m*6 + s/10;
	minuteHand.style.transform = "rotate(" + minuteDegrees + "deg)";
}

function setHour(h,m){
	var hourDegrees = h*30 + m/2;
	hourHand.style.transform = "rotate(" + hourDegrees + "deg)";
}

function updateHands(){
	var date = new Date();
	var s = date.getSeconds();
	var m = date.getMinutes();
	var h = date.getHours();
	setSecond(s);
	setMinute(m,s);
	setHour(h,m);
	
	// crazy will make the hands go really fast!
	// crazy ++;
	// s = crazy;
	// m = s/10;
	// h = m/10;

	// setSecond(s);
	// setMinute(m,s);
	// setHour(h,m);
}

setInterval(updateHands, 10);