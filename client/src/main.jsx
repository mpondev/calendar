import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import { DateProvider } from './context/DateContext.jsx';

import './styles/index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <DateProvider>
      <App />
    </DateProvider>
  </React.StrictMode>
);
