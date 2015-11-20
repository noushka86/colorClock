window.onload=function(){
		var clockEl=document.getElementById('clock'),
			containerEl=document.getElementById('container'),
			bodyEl=document.getElementById('body')
	
		var currentTime;
		var status="digital";
		var color;
		updateTime();

		clockEl.onmouseover=changeClockToHex;
	    clockEl.onmouseout=changeClockToDigital;

		setInterval(updateTime,500);
		
function changeClockToHex(){
status="hex";
updateTime()
}

function changeClockToDigital(){
status="digital";
updateTime()
}
		function updateTime(){
				var d=new Date(), 
				h=d.getHours(),
				m=d.getMinutes(),
				s=d.getSeconds();
				if (status==="digital") {
					currentTime=addZiro(h)+":"+addZiro(m)+":"+addZiro(s);
					clockEl.innerHTML=currentTime
				}
				else if(status==="hex"){
					var hexSeconds=toHex(s*255/60);
		var hexMinutes=toHex(m*255/60);
		var hexHours=toHex(h*255/24);
		currentTime=addZiro(hexHours)+":"+addZiro(hexMinutes)+":"
		+addZiro(hexSeconds);
		clockEl.innerHTML=currentTime;
				}

				containerEl.style.background=generateClockColor();
				bodyEl.style.background=generateClockColor();

		


			}
		 	  
		

function toHex(num){
		return addZiro((Math.round(num)).toString(16));
	}




function generateClockColor(){
	var d=new Date(), 
				h=d.getHours(),
				m=d.getMinutes(),
				s=d.getSeconds();
		var hexSeconds=toHex(s*255/60);
		var hexMinutes=toHex(m*255/60);
		var hexHours=toHex(h*255/24);

		color = '#' + hexHours + hexMinutes + hexSeconds;
		// console.log(color);
		return color;

}


function addZiro(num){
	var complete=num+"";
	if(complete.length===1){
		 complete="0"+num;
	}
	return complete;
}



}
Hex(s*255/60);
		var hexMinutes=toHex(m*255/60);
		var hexHours=toHex(h*255/24);

		color = '#' + hexHours + hexMinutes + hexSeconds;
		// console.log(color);
		return color;

}


function addZiro(num){
	var complete=num+"";
	if(complete.length===1){
		 complete="0"+num;
	}
	return complete;
}



}