const apiKey = '8d48aceec23b42beaad51954231105';
const city = 'New York City';

const temperatureEl = document.querySelector('.temperature');
const descriptionEl = document.querySelector('.description');

const url = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}`;

fetch(url)
	.then(response => response.json())
	.then(data => {
		const temperature = 'It is '+ data.current.temp_f + '°F' +' right now';
		const description = 'with '+ data.current.condition.text + ' skies!';
		temperatureEl.textContent = temperature;
		descriptionEl.textContent = description;
	})
	.catch(error => {
		console.error('Error fetching weather data:', error);
	});


  $(document).ready(function() {$("#cloud").draggable(); })

$(document).ready(function() {$("#pizza").draggable(); })

$(document).ready(function() {$("#rat").draggable(); })

$(document).ready(function() {$("#subway").draggable(); })

$(document).ready(function() {$("#sun").draggable();})

$(document).ready(function() {$("#cityscape").draggable();})

$(document).ready(function() {$("#apple").draggable();})

$(document).ready(function() {$("#sol").draggable();})

$(document).ready(function() {$("#taxi").draggable();})

function onloadFunction() {
  var amount = 10; 
  var arrayIDs = ["cloud", "pizza", "rat", "subway", "sun", "cityscape", "apple", "sol", "taxi"];
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
