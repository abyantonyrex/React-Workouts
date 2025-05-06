import React, { useState, useContext } from 'react';
import axios from 'axios';
import API_KEY from './config';
import WeatherToday from './components/WeatherToday';
import Forecast from './components/Forecast';
import DarkModeToggle from './components/DarkModeToggle';
import { WeatherContext } from './WeatherContext';
import './App.css';

const App = () => {
  const [city, setCity] = useState('');
  const [todayData, setTodayData] = useState(null);
  const [forecastData, setForecastData] = useState(null);
  const [error, setError] = useState('');
  const { darkMode } = useContext(WeatherContext); 

  const fetchWeather = async () => {
    try {
      setError('');
      const currentRes = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
      );
      const forecastRes = await axios.get(
        `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${API_KEY}&units=metric`
      );
      setTodayData(currentRes.data);
      setForecastData(forecastRes.data);
    } catch (err) {
      setError('City not found or API issue.');
      setTodayData(null);
      setForecastData(null);
    }
  };

  return (
    <div className={`app-container ${darkMode ? 'dark' : ''}`}>
      <DarkModeToggle />
      <h1>☁️ Weather App</h1>
      <input
        type="text"
        value={city}
        onChange={e => setCity(e.target.value)}
        placeholder="Enter city"
      />
      <button onClick={fetchWeather}>GET</button>
      {error && <p className="error">{error}</p>}
      <WeatherToday data={todayData} />
      <Forecast data={forecastData} />
    </div>
  );
};

export default App;
