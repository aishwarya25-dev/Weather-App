# 🌤️ Weather App

### Author : Aishwarya ♡
---
A clean, glassmorphic weather app built with vanilla HTML, CSS, and JavaScript. Search any city and get real-time weather conditions, temperature, humidity, and wind speed — pulled live from the OpenWeather API.

![Weather App Screenshot](Screenshorts/page-1.png)
![Weather App Screenshot](Screenshorts/page-2.png)

## Features

- Search weather by city name
- Real-time temperature, weather condition, humidity, and wind speed
- Dynamic weather icons that match live conditions (via OpenWeather's icon API)
- Glassmorphism UI with an animated gradient background
- Smooth loading and error states (e.g. invalid city names)
- Responsive layout

## Built With

- **HTML5** – structure
- **CSS3** – glassmorphism, flexbox, animations, custom Google Fonts
- **JavaScript** – async/await, fetch API, DOM manipulation
- **[OpenWeather API](https://openweathermap.org/api)** – live weather data

## Preview

| Search | Result |
|--------|--------|
| Enter any city name | Get instant weather with icon, temp, humidity & wind |

## Getting Started

### Run locally

1. Clone the repo
```bash
   git clone https://github.com/aishwarya25-dev/Weather-App.git
   cd Weather-App
```

2. Get a free API key from [OpenWeather](https://openweathermap.org/api)

3. Open `config_api.js` and replace the value with your own key
```js
   const apiKey = "YOUR_OPENWEATHER_APIKEY";
```

4. Open `index.html` in your browser.
   

## What I Learned

- Working with async/await and handling live API responses
- Rendering conditional UI based on API data (dynamic icons, error states)
- Building a glassmorphism UI with CSS `backdrop-filter`
- Font pairing and typography choices for visual hierarchy
- Structuring clean, readable vanilla JS without a framework
- Keeping API keys out of version control using `.gitignore`

## Future Improvements

- 5-day forecast view
- Auto-detect user location via Geolocation API
- °C / °F unit toggle
- Dark mode


