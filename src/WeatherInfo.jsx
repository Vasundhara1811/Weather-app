import React from 'react';

function WeatherInfo({ city, weatherData }) {
  return (
    <div class="weather-info">
      <h2 class="cityname">Weather in {city}</h2>
      <div class="div-flex">
        <div>
          <div class="w-info">
          <h3 class="type">Condition:</h3> <p class="t-info">{weatherData.condition}</p>
          </div>
        </div>
        <div>
          <div class="w-info">
          <h3 class="type">Temperature:</h3><p class="t-info"> {weatherData.temperature}</p>
          </div>
        </div>
        <div>
          <div class="w-info">
          <h3 class="type">Humidity:</h3> <p class="t-info">{weatherData.humidity}</p>
        </div>
        </div>
      </div>
    </div>
  );
}

export default WeatherInfo;
