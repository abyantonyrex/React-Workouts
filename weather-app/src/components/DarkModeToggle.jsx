import React, { useContext } from 'react';
import { WeatherContext } from '../WeatherContext';

const DarkModeToggle = () => {
  const { darkMode, setDarkMode } = useContext(WeatherContext);

  return (
    <button onClick={() => setDarkMode(!darkMode)} className="toggle">
      {darkMode ? '☀️ Light Mode' : '🌙 Dark Mode'}
    </button>
  );
};

export default DarkModeToggle;
