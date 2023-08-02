
//text-change
function textChange(){
  document.getElementById('h2').innerHTML= "Hello there!";
}
//text show/hide
function textShow(){
  document.getElementById('tsh').style.display="block";
}

function textHide(){
  document.getElementById('tsh').style.display="none";
}
//show date
function showDate(){
  document.getElementById('tsd').innerHTML= Date();
}
//bulb on/off
function bulbOn(){
  document.getElementById('bulb').src='images/bulbon.gif';
}

function bulbOff2(){
  document.getElementById('bulb').src='images/bulboff2.gif';
}

// contentChange
function contentChangeQ(){
  document.getElementById('qa').innerHTML = "What is your profession?";
  document.getElementById('qa').style.display ="block";
}
function contentChange(){
  document.getElementById('qa').innerHTML = "I am a banker.";
}
// color change
function colorChange(){
  document.getElementById('col').style.color = "blue";
}
// dubble click
function dubbleClick(){
  document.getElementById('dbl').innerHTML = "We have to practice more to be a professional freelancer."
  document.getElementById('dbl').style.color = "red";

}
// img hover
function imgNormal(x){
  x.style.height = "30px";
  x.style.width = "30px";
}
function imgBig(x){
  x.style.height = "90px";
  x.style.width = "90px";
}
