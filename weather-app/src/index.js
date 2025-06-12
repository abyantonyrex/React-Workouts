import React from 'react';
import ReactDOM from 'react-dom/client';
// import App from './App';
import { WeatherProvider } from './WeatherContext';
import reportWebVitals from './reportWebVitals';
// import FeedbackSystem from './components/Counter';
import PostDisplay from './components/BlogSpot';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <WeatherProvider>
      {/* <App /> */}
      <PostDisplay/>
    </WeatherProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
