useEffect(() => {
    const savedWeather = localStorage.getItem('weatherData');
    if (savedWeather) {
      setWeatherData(JSON.parse(savedWeather));
    }
  }, []);
  
  useEffect(() => {
    if (weatherData) {
      localStorage.setItem('weatherData', JSON.stringify(weatherData));
    }
  }, [weatherData]);
  