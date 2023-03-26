const apiKey = 'e3ad9685b27061fdb70bdd86c8780ffd';

function getWeatherByCityName(cityName) {
  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&appid=${apiKey}`;

  fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
      const iconCode = data.weather[0].icon;
      const iconUrl = `http://openweathermap.org/img/w/${iconCode}.png`;
      const cityName = data.name;
      const description = data.weather[0].description;
      const temp = data.main.temp;
      const humidity = data.main.humidity;
      const windSpeed = data.wind.speed;
      const chanceOfRain = data.rain?.["1h"] || 0;
      const timestamp = data.dt;
      const date = new Date(timestamp * 1000);
      const formattedTime = date.toLocaleTimeString();

      // Update the UI with the weather data
      document.getElementById("icon").src = iconUrl;
      document.getElementById("city-name").textContent = cityName;
      document.getElementById("description").textContent = description;
      document.getElementById("temp").textContent = `${temp} °C`;
      document.getElementById("humidity").textContent = `Humidity: ${humidity}%`;
      document.getElementById("wind").textContent = `Wind: ${windSpeed} m/s`;
      document.getElementById("rain").textContent = `Chance of Rain: ${chanceOfRain} mm/h`;
      document.getElementById("time").textContent = `Updated at ${formattedTime}`;
    })
    .catch(error => {
      console.error(error);
      alert("Unable to retrieve weather data. Please try again later.");
    });
}

function searchWeather() {
  const input = document.getElementById("search-input").value.trim();
  if (input) {
    getWeatherByCityName(input);
  } else {
    alert("Please enter a city name.");
  }
}
