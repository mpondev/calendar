import { createContext, useContext, useState } from 'react';
import dayjs from 'dayjs';

const DateContext = createContext();

function useDate() {
  const context = useContext(DateContext);
  if (context === undefined)
    throw new Error('ThemeContext was used outside of the ThemeProvider');

  return context;
}

function DateProvider({ children }) {
  const [date, setDate] = useState(dayjs());
  return (
    <DateContext.Provider value={{ date, setDate }}>
      {children}
    </DateContext.Provider>
  );
}

export { DateProvider, useDate };
