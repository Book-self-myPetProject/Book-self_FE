import React, { useContext, useEffect, useState } from 'react';
import { MainLoggedLayout } from '../../layouts/MainLoggedLayout';
import { CalendarMini } from '../../components/CalendarMini/CalendarMini';
import { CalendarMonth } from '../../components/CalendarMonth/CalendarMonth';
import { CalendarEnum } from '../../utils/enum/CalendarEnum';
import { CalendarDay } from '../../components/CalendarDay/CalendarDay';
import { CalendarWeek } from '../../components/CalendarWeek/CalendarWeek';
import { CalendarYear } from '../../components/CalendarYear/CalendarYear';

export const Calendar: React.FC = () => {
  const [chosenCalendar, setChosenCalendar] = useState<CalendarEnum>(CalendarEnum.YEAR);

  return (
    <>
      <MainLoggedLayout>
        {chosenCalendar === CalendarEnum.MINI && <CalendarMini setChosenCalendar={setChosenCalendar} />}
        {chosenCalendar === CalendarEnum.DAY && <CalendarDay setChosenCalendar={setChosenCalendar} />}
        {chosenCalendar === CalendarEnum.WEEK && <CalendarWeek setChosenCalendar={setChosenCalendar} />}
        {chosenCalendar === CalendarEnum.MONTH && <CalendarMonth setChosenCalendar={setChosenCalendar} />}
        {chosenCalendar === CalendarEnum.YEAR && <CalendarYear setChosenCalendar={setChosenCalendar} />}
      </MainLoggedLayout>
    </>
  );
};
