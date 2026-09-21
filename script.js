const cityInput = document.querySelector("#city-input");
const getWeatherBtn = document.querySelector("#get-weather-btn");
const tempElement = document.querySelector("#temp");
const humidityElement = document.querySelector("#humidity");
const windSpeedElement = document.querySelector("#windSpeed");
const locationElement = document.querySelector("#location");
const weatherDescriptionElement = document.querySelector("#weatherDescription");
const weatherIcon = document.querySelector("#weather-info-img");
const locationIcon = document.querySelector("#location-icon");
const weatherDescriptions = {
    0: "Clear sky",
    1: "Mainly clear",
    2: "Partly cloudy",
    3: "Overcast",
    45: "Fog",
    48: "Depositing rime fog",
    51: "Light drizzle",
    53: "Moderate drizzle",
    55: "Dense drizzle",
    61: "Slight rain",
    63: "Moderate rain",
    65: "Heavy rain",
    71: "Slight snow",
    73: "Moderate snow",
    75: "Heavy snow",
    80: "Slight rain showers",
    81: "Moderate rain showers",
    82: "Violent rain showers",
    95: "Thunderstorm"
};

const weatherIcons = {
    0: "Clear.svg",
    1: "Clear.svg",

    2: "Partly Cloudy.svg",
    3: "Cloudy.svg",

    45: "Fog.svg",
    48: "Fog.svg",

    51: "Drizzle.svg",
    53: "Drizzle.svg",
    55: "Drizzle.svg",

    61: "rain.svg",
    63: "rain.svg",
    65: "rain.svg",

    71: "snow.svg",
    73: "snow.svg",
    75: "snow.svg",

    80: "rain.svg",
    81: "rain.svg",
    82: "rain.svg",

    95: "thunder-storm.svg"
};
getWeatherBtn.addEventListener("click", async () => {
    const city = cityInput.value.trim();
    if (city === "") return;

    const url = `https://geocoding-api.open-meteo.com/v1/search?name=${city}&count=1&language=en&format=json`;
    const response = await fetch(url);
    const data = await response.json();
    if (!data.results) {
        locationElement.textContent = "City not found";
        return;
    }
    const location = data.results[0];
    const country = location.country;
    const state = location.admin1;
    const latitude = location.latitude;
    const longitude = location.longitude;
    const weatherUrl =
        `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=temperature_2m,relative_humidity_2m,wind_speed_10m,weather_code`;

    getWeatherBtn.textContent = "Loading...";
    getWeatherBtn.disabled = true;
    try {
        const weatherResponse = await fetch(weatherUrl);
        const weatherData = await weatherResponse.json();
        const temperature = weatherData.current.temperature_2m;
        const humidity = weatherData.current.relative_humidity_2m;
        const windSpeed = weatherData.current.wind_speed_10m;
        const weatherCode = weatherData.current.weather_code;
        tempElement.textContent = `${temperature} °C`;
        humidityElement.textContent = `${humidity} %`;
        windSpeedElement.textContent = `${windSpeed} km/h`;
        locationElement.textContent = `${location.name}, ${state}, ${country}`;

        const weatherDescription = weatherDescriptions[weatherCode] || "Unknown";
        weatherDescriptionElement.textContent = weatherDescription;


        weatherIcon.style.display = 'block';
        locationIcon.style.display = 'block';
        weatherIcon.src = `assets/${weatherIcons[weatherCode]}`;
    } catch (error) {
        console.log(error);
    } finally {
        getWeatherBtn.textContent = "Get Weather";
        getWeatherBtn.disabled = false;
    }
    cityInput.value = '';
})