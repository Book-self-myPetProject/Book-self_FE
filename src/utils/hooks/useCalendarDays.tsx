import React, { useEffect, useState } from 'react'
import { getCalendarDays, getWeek } from '../functions/getCalendarDays';
import { Month } from '../types/Month';

export const useCalendarDays = () => {
  const [today] = useState(new Date().getDate());
  const [chosenDay, setChosenDay] = useState(new Date().getDate());
  const [chosenWeek, setChosenWeek] = useState(
    getWeek(new Date(new Date().getFullYear(), new Date().getMonth(), new Date().getDate()))
  );
  const [chosenMonth, setChosenMonth] = useState(new Date().getMonth());
  const [chosenYear, setChosenYear] = useState(new Date().getFullYear());
  const [howManyMonths, setHowManyMonths] = useState(12);

  const [months, setMonths] = useState<Month[]>([{
    name: '',
    date: [],
  }]);

  const resetChosenDates = () => {
    setChosenDay(new Date().getDate())
    setChosenWeek(getWeek(new Date(new Date().getFullYear(), new Date().getMonth(), new Date().getDate())))
    setChosenMonth(new Date().getMonth())
    setChosenYear(new Date().getFullYear())
  }

  useEffect(() => {
    let calendarDataArray = [];

    for (let i = 0; i < howManyMonths; i++) {
      const year = chosenYear;
      const month = chosenMonth + i;
  
      const calendarData = getCalendarDays(year, month);
  
      calendarDataArray.push(calendarData);
    }

    setMonths([...calendarDataArray]);
    calendarDataArray = [];
  }, [chosenMonth, chosenYear, howManyMonths]);
  

  return {
    setChosenDay,
    setChosenWeek,
    setChosenMonth,
    setChosenYear,
    today,
    chosenDay,
    chosenWeek,
    chosenMonth,
    chosenYear,
    howManyMonths,
    setHowManyMonths,
    months,
    setMonths,
    resetChosenDates,
  }
}
