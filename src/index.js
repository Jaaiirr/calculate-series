import React from 'react';
import ReactDOM from 'react-dom/client';

import MainFormComponent from './components/MainformComponent.js';
import './styles/index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <MainFormComponent />
  </React.StrictMode>
);

