import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.css';
// import MainFormComponent from './components/MainformComponent.js';
import CalculateSeries from './components/CalculateSeriesComponent';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <MainFormComponent /> */}
    <CalculateSeries />
  </React.StrictMode>
);

