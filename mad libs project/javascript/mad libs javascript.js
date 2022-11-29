// JavaScript Document

function write(){
	console.log("work hopefully");

console.log("isit working");



	
var answer1=document.getElementById('name1').value;
console.log(answer1);

var answer2=document.getElementById('name2').value;
console.log(answer2);

var answer3=document.getElementById('name3').value;
console.log(answer3);

var answer4=document.getElementById('name4').value;
console.log(answer4);

var answer5=document.getElementById('name5').value;
console.log(answer5);

var answer6=document.getElementById('name6').value;
console.log(answer6);

var answer7=document.getElementById('name7').value;
console.log(answer7);

var answer8=document.getElementById('name8').value;
console.log(answer8);

var answer9=document.getElementById('name9').value;
console.log(answer9);

var answer10=document.getElementById('name10').value;
console.log(answer10);



	
	
var poll = document.querySelector('input[name="poll"]:checked').value;
console.log(poll);

var aftermath;	


if(poll=="notscary"){
	aftermath = "<b>oooooooooo spooky</b>";
}else if (poll=="kindascary"){
	aftermath = "<b> ooOooOoOoooOOOooo kinda spooky!</b>";
}else if (poll=="scary"){
	aftermath = "<b>OooooOOooOOOooOoOOoOo Ahhhhhhhhhhhhh!! damn thats scary!!</b>";
}else if (poll=="holyspookyscary"){
	aftermath = "<b>AAAAAAAAAAAAAAAAAHHHHHHHHHHHHHHHHHHHHH!!!.....i didn't scream you did.</b>";	
}
//console.log(aftermath);


	
	
//console.log(finalProducttest);


document.getElementById('finalProduct').innerHTML = "<h2><b>Lets see how your story ended</b></h2>";
document.getElementById('finalProduct').innerHTML += "<p>It just felt like I was falling, if I was <b>"+answer1+"</b> or if I jumped I don't know. I can see the pavement getting closer, oh god its only fifty <b>"+answer2+"</b> away. I wake up breathing too heavily to catch my breath, I hate nightmares always showing you something that never happens. I'm awake now but my body is still recovering from the <b>"+answer3+"</b>. I keep my eyes closed. I never know why I can never open my eyes after <b>"+answer4+"</b> like these. I don't know how long my eyes are closed but it is always for too long. When they finally open it gives a sense of <b>"+answer5+"</b> reassuring me the dream was just a dream but the calm was <b>"+answer6+"</b> for a second, the door to my room was the first thing I saw and a thought made its way to the front. What happens if I open that door? It will just be the rest of my <b>"+answer7+"</b>, but what if there's something else, something unspeakable, something horrific? No, it's just my door to the room. I can literally describe <b>"+answer8+"</b> what's on the other side. But what if I'm wrong, what's the worst thing that's there, aw shit the spooky thoughts of millions of images and things constructed in the back of my mind began to flow like a river of <b>"+answer9+"</b> that these things would draw. Enough of this, this is stupid I got up finally to go to the <b>"+answer10+"</b>. Dread filled my body immediately at that door, a chill as fine as a monster streaking its claw down my spine. That door is wrong, it's not my door.</p>";

document.getElementById('finalProduct').innerHTML +="" +aftermath;
document.getElementById('finalProduct').innerHTML += "<img class='img-fluid' src='images/spooky_arms.jpg' alt='spooky_arms'>";

}	
	
	
	
