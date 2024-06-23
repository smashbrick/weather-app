"use strict";
// Element Selections
let degree = document.getElementById("degree");
let humidity = document.getElementById("humidity");
let windSpeed = document.getElementById("wind-speed");
let weatherImage = document.getElementById("weather-image");
let searchBox = document.getElementById("search-bar");
let searchBtn = document.getElementById("search-btn");
let weatherBox = document.getElementById("weather-box");
let errorBox = document.querySelector(".not-found-box");

//Fetching the API
async function response(country) {
	const response = await fetch(
		`https://api.openweathermap.org/data/2.5/weather?q=${country}&appid=274c72a9daa27ed89b1b5622ce213193&units=metric`
	);
	const data = await response.json();

	if (response.status == 404) {
		weatherBox.classList.add("hidden");
		errorBox.classList.remove("hidden");
	} else {
		//Assigning values
		degree.innerHTML = `${Math.trunc(data.main.temp)}&#176;`;
		humidity.innerHTML = data.main.humidity;
		weather.innerHTML = data.weather[0].main;
		windSpeed.innerHTML = `${data.wind.speed} km/h`;
		weatherImage.src = `./images/${weather.innerHTML}.png`;

		weatherBox.classList.remove("hidden");
		errorBox.classList.add("hidden");
	}
}

// Search feature through mouse click
searchBtn.addEventListener("click", function () {
	response(searchBox.value);
});

//Search feature through ENTER
searchBox.addEventListener("keypress", function (e) {
	if (e.keyCode === 13) {
		response(searchBox.value);
	}
});
