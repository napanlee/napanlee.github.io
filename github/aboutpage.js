$(document).ready(function() {$("#me").draggable(); })

function onloadFunction() {
  var amount = 10; 
  var arrayIDs = ["me"];
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