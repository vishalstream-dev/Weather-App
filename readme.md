# Weather App

**Author:** Vishal Sharma

A responsive Weather App built using HTML, CSS, and JavaScript.

The app allows users to search for a city and view its current weather information using the Open-Meteo API.

## Features

- Search weather by city name
- Display current temperature
- Display humidity
- Display wind speed
- Display city, state, and country
- Display current weather condition
- Dynamic weather icons based on weather condition
- Handle invalid city searches
- Loading state while fetching weather data
- Responsive design for desktop and mobile devices

## Technologies Used

- HTML5
- CSS3
- JavaScript
- Fetch API
- Open-Meteo Geocoding API
- Open-Meteo Weather API

## How It Works

1. User enters a city name.
2. The Geocoding API converts the city name into latitude and longitude.
3. The Weather API uses those coordinates to fetch current weather data.
4. JavaScript processes the API response.
5. The weather information and icon are updated dynamically in the UI.

## API

This project uses [Open-Meteo](https://open-meteo.com/) for geocoding and weather data.

## Project Structure

```text
Weather App/
│
├── assets/
│   ├── weather icons
│   └── other icons
│── screenshot/
│   ├── weather-App-Screenshot
│   └── weather-App-Screenshot-2
├── index.html
├── style.css
├── script.js
└── README.md
## Screenshots

![Weather App Screenshot](screenshot\weather-App-Screenshot.png)
![Weather App Screenshot](screenshot\weather-App-Screenshot-2.png)