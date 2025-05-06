import { createContext, useState } from 'react';

export const WeatherContext = createContext();

export const WeatherProvider = ({ children }) => {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <WeatherContext.Provider value={{ darkMode, setDarkMode }}>
      {children}
    </WeatherContext.Provider>
  );
};
