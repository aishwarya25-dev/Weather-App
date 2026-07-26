async function fetchweather() {
    const city = document.getElementById("search").value;

    if (city === "") {
        alert("Enter a city name!");
        return;
    }

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    const response = await fetch(url);
    const data = await response.json();

    const weatherData = document.getElementById("weather-data");
    weatherData.style.display = "block";

    if (data.cod != 200) {
        weatherData.innerHTML = `<p>City not found!</p>`;
        return;
    }
  let icon = "❁";

  if (data.weather[0].main === "Clouds") icon = "☁️";
  else if (data.weather[0].main === "Rain") icon = "🌧️";
  else if (data.weather[0].main === "Thunderstorm") icon = "⛈️";
  else if (data.weather[0].main === "Snow") icon = "❄️";
  else if (data.weather[0].main === "Mist") icon = "🌫️";

    weatherData.innerHTML = `
    <div class="weather-card">
      <div class="weather-icon">${icon}</div>
      <h2>◎ ${data.name}</h2>
      <h1>${Math.round(data.main.temp)}°C</h1>
      <h3>${data.weather[0].main}</h3>
      <p>๑ Humidity: ${data.main.humidity}%</p>
      <p>~ Wind: ${data.wind.speed} m/s</p>
    </div>
`;
}