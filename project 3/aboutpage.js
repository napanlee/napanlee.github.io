// try playing with this ALERT - 
$(document).ready(function() {alert("[hello! drag the emojis around and have fun]"); })

// JS files comment with two backslash lines 
$(document).ready(function() {$("#cloud").draggable(); })

$(document).ready(function() {$("#cloudysun").draggable(); })

$(document).ready(function() {$("#raincloud").draggable(); })

$(document).ready(function() {$("#snowcloud").draggable(); })

$(document).ready(function() {$("#sun").draggable();})

$(document).ready(function() {$("#umbrella").draggable();})

$(document).ready(function() {$("#apple").draggable();})

$(document).ready(function() {$("#sol").draggable();})

$(document).ready(function() {$("#taxi").draggable();})

function onloadFunction() {
  var amount = 10; 
  var arrayIDs = ["cloud", "cloudysun", "raincloud", "snowcloud", "sun", "umbrella", "apple", "sol", "taxi"];
  for (i=1;i<=amount;i++) {

   var element = document.getElementById(arrayIDs[i-1]);
   var positionInfo = element.getBoundingClientRect();
   var imgHeight = positionInfo.height;
   var imgWidth = positionInfo.width;

   var screenWidth = window.innerWidth;
   var screenHeight = window.innerHeight;

   var imgLeft = Math.floor(Math.random() * (screenWidth - imgWidth)); 
   var imgTop= Math.floor(Math.random() * (screenHeight - imgHeight)); 

   document.getElementById(arrayIDs[i-1]).style.top = imgTop+"px";
   document.getElementById(arrayIDs[i-1]).style.left = imgLeft+"px";
  }
}
  
  
  