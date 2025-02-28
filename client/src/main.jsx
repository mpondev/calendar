import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router';
import { ClerkProvider } from '@clerk/clerk-react';

import DayGrid from './routes/DayGrid.jsx';
import ListGrid from './routes/ListGrid.jsx';
import MonthGrid from './routes/MonthGrid.jsx';
import WeekGrid from './routes/WeekGrid.jsx';

import MainLayout from './layouts/MainLayout.jsx';

import './index.css';

const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;

if (!PUBLISHABLE_KEY) {
  throw new Error('Missing Publishable Key');
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ClerkProvider publishableKey={PUBLISHABLE_KEY}>
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
    </ClerkProvider>
  </StrictMode>
);
