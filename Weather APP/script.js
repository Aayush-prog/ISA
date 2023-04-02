

async function getWeatherByCityName(city) {
    const response = await fetch("https://api.openweathermap.org/data/2.5/weather?q="+city+"&units=metric&appid=5f03c07456880febc706536f866cd8fd");
    const data = await response.json();
    console.log(data)
    const iconCode = data.weather[0].icon;
    const iconUrl = `http://openweathermap.org/img/w/${iconCode}.png`;
    const cityName = data.name;
    const description = data.weather[0].description;
    const temp = data.main.temp;
    const humidity = data.main.humidity;
    const windSpeed = data.wind.speed;
    const pressure = data.main.pressure;
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
    document.getElementById("pressure").textContent = `Pressure: ${pressure} Pa`;
    document.getElementById("time").textContent = `Updated at ${formattedTime}`;
}
const input = document.getElementById("city");
function caller(){
    getWeatherByCityName(input.value);
}
if (!input.value) {
        getWeatherByCityName('Angus');
    }

