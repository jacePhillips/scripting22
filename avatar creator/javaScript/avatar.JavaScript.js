// JavaScript Document

//were images are showing
var warrior = {face:"", eyes:"", smalleyes:"", wizbody:"", armorbody:"", axebody:"", class:""};


function setface(changling){
	warrior.face=changling;
	console.log(warrior.face);
	buildbody();
}

function seteyes(changling){
	warrior.eyes=changling;
	console.log(warrior.eyes);
	buildbody();
}
function setsmalleyes(changling){
	warrior.smalleyeseyes=changling;
	console.log(warrior.smalleyes);
	buildbody();
}

function setwizbody(changling){
	warrior.wizbody=changling;
	console.log(warrior.wizbody);
	buildbody();
}

function setarmorbody(changling){
	warrior.armorbody=changling;
	console.log(warrior.armorbody);
	buildbody();
}
function setclass(changling){
	warrior.class=changling;
	console.log(warrior.class);
	buildbody();
}/***items stuff hope works*/

function setaxebody(changling){
	warrior.axebody=changling;
	console.log(warrior.axebody);
	buildbody();
}


function buildbody(){
		
		if(warrior.face!=""){
			document.getElementById('face').innerHTML="<img class='img-fluid'  src='images/"+warrior.face+"' alt='face'>";
		}
		
		if(warrior.eyes!=""){
			document.getElementById('eyes').innerHTML="<img class='img-fluid' src='images/"+warrior.eyes+"' alt='eyes'>";
		}
		
		if(warrior.smalleyes!=""){
			document.getElementById('smalleyes').innerHTML="<img class='img-fluid' src='images/"+warrior.smalleyes+"' alt='smalleyes'>";
		}
		
		if(warrior.wizbody!=""){
			document.getElementById('wizbody').innerHTML="<img class='img-fluid' src='images/"+warrior.wizbody+"' alt='wizbody'>";
		}
	
		if(warrior.armorbody!=""){
			document.getElementById('armorbody').innerHTML="<img class='img-fluid' src='images/"+warrior.armorbody+"' alt='armorbody'>";
		}
	
	if(warrior.class!=""){
			document.getElementById('class').innerHTML="<img class='img-fluid'  src='images/"+warrior.class+"' alt='class'>";
		}
	
	if(warrior.axebody!=""){
			document.getElementById('axebody').innerHTML="<img class='img-fluid'  src='images/"+warrior.axebody+"' alt='axebody'>";
		}
		
	
	}
	