"use strict";
// Element Selections
let degree = document.getElementById("degree");
let humidity = document.getElementById("humidity");
let windSpeed = document.getElementById("wind-speed");
let weatherImage = document.getElementById("weather-image");
let searchBox = document.getElementById("search-bar");
let searchBtn = document.getElementById("search-btn");
let weatherBox = document.getElementById("weather-box");

//Fetching the API
async function response(country) {
	const response = await fetch(
		`https://api.openweathermap.org/data/2.5/weather?q=${country}&appid=274c72a9daa27ed89b1b5622ce213193&units=metric`
	);
	const data = await response.json();
	console.log(response);
	console.log(data);

	//Assigning values
	degree.innerHTML = Math.trunc(data.main.temp);
	humidity.innerHTML = data.main.humidity;
	weather.innerHTML = data.weather[0].main;
	windSpeed.innerHTML = `${data.wind.speed} km/h`;
	weatherImage.src = `./images/${weather.innerHTML}.png`;
}

// Search feature
searchBtn.addEventListener("click", function () {
	weatherBox.classList.remove("hidden");
	response(searchBox.value);
});
