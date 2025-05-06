import React from 'react';

const WeatherToday = ({ data }) => {
  if (!data) return null;

  const { name, main, weather, wind } = data;

  return (
    <div className="today-card">
      <h2>{name}</h2>
      <p>{weather[0].description}</p>
      <p>🌡️ {main.temp}°C</p>
      <p>💧 Humidity: {main.humidity}%</p>
      <p>💨 Wind: {wind.speed} m/s</p>
    </div>
  );
};

export default WeatherToday;
