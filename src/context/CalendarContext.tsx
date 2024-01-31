import React, { ReactNode, createContext, useContext } from 'react';
import { useCalendarDays } from '../utils/hooks/useCalendarDays';

export const CalendarContext = createContext<any>(null); // Adjust the type as needed

interface CalendarContextProviderProps {
  children: ReactNode;
}

export const CalendarContextProvider: React.FC<CalendarContextProviderProps> = ({ children }) => {
  const calendarData = useCalendarDays();

  return (
    <CalendarContext.Provider value={calendarData}>
      {children}
    </CalendarContext.Provider>
  );
};
