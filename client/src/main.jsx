import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router';

import DayGrid from './routes/DayGrid.jsx';
import ListGrid from './routes/ListGrid.jsx';
import MonthGrid from './routes/MonthGrid.jsx';
import WeekGrid from './routes/WeekGrid.jsx';

import MainLayout from './layouts/MainLayout.jsx';

import './index.css';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route index path="/" element={<Navigate to="/month" />} />
          <Route path="/month" element={<MonthGrid />} />
          <Route path="/week" element={<WeekGrid />} />
          <Route path="/day" element={<DayGrid />} />
          <Route path="/list" element={<ListGrid />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
