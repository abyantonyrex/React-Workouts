import React from 'react';

const Forecast = ({ data }) => {
  if (!data || !data.list) return null;

  const dailyData = data.list.filter(reading => reading.dt_txt.includes("12:00:00"));

  return (
    <div className="forecast-grid">
      {dailyData.map((item, index) => (
        <div key={index} className="forecast-card">
          <h4>{new Date(item.dt_txt).toLocaleDateString()}</h4>
          <p>{item.weather[0].description}</p>
          <p>🌡️ {item.main.temp}°C</p>
        </div>
      ))}
    </div>
  );
};

export default Forecast;
