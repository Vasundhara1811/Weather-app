import React, { useState } from 'react';
import SearchBar from './SearchBar';
import WeatherInfo from './WeatherInfo';
import './App.css';

function App() {
  const [city, setCity] = useState('');
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchWeather = async (cityName) => {
    setLoading(true);
    setError(null);
    try {
      const apiKey = '9695d8fb9548f6529762ff802bdab8ac';
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=metric`
      );

      console.log(response);
  
      if (!response.ok) {
        throw new Error('City not found');
      }
  
      const data = await response.json();
  
      const weatherInfo = {
        condition: data.weather[0].description,
        temperature: `${data.main.temp}°C`,
        humidity: `${data.main.humidity}%`,
      };
  
      setWeatherData(weatherInfo);
      setCity(cityName);
    } catch (err) {
      setError('Failed to fetch weather data: ' + err.message);
    } finally {
      setLoading(false);
    }
  };
  

  return (
    <div class="container">
      <div class="App">
        <h1 class="head">Weather Application</h1>
        <SearchBar onSearch={fetchWeather} class="prop" />
        {loading && <p>Loading...</p>}
        {error && <p class="error">{error}</p>}
        {weatherData && <WeatherInfo city={city} weatherData={weatherData} />}
      </div>
    </div>
  );
}

export default App;



