function getCalendarDays(year: number, month: number) {
  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();
  const currentMonth = currentDate.getMonth();
  const currentDay = currentDate.getDate();

  const isCurrentMonth = year === currentYear && month === currentMonth;

  const firstDay = new Date(year, month, 1);

  const startDayOfWeek = firstDay.getDay(); // 0 for Sunday, 1 for Monday, etc.

  const lastDayOfPreviousMonth = new Date(year, month, 0);
  const lastDateOfPreviousMonth = lastDayOfPreviousMonth.getDate();
  const lastDayOfThisMonth = new Date(year, month + 1, 0);

  const days = [];

  // Add last days from the month before
// Calculate the number of days from the previous month to add
let prevDays = startDayOfWeek === 0 ? 6 : startDayOfWeek - 1;

// Add days from the previous month
for (let day = 1; day <= prevDays; day++) {
  const date = new Date(year, month - 1, lastDateOfPreviousMonth - prevDays + day + 1);
  days.push({
    date: date.toISOString().slice(0, 10), // Format as 'YYYY-MM-DD'
    isCurrentMonth: false,
    isToday: day - 1 === currentDay && isCurrentMonth, // None of these days can be 'today' as they are from the previous month
  });
}

  // Add days for the current month
  for (let day = 2; day <= lastDayOfThisMonth.getDate() + 1; day++) {
    const date = new Date(year, month, day);
    days.push({
      date: date.toISOString().slice(0, 10), // Format as 'YYYY-MM-DD'
      isCurrentMonth: true,
      isToday: day - 1 === currentDay && isCurrentMonth,
    });
  }

  if (lastDayOfThisMonth.getDay() !== 0) {
    for (let day = 2; day <= 7 - lastDayOfThisMonth.getDay() + 1; day++) {
    const date = new Date(year, month, day);
    days.push({
      date: date.toISOString().slice(0, 10), // Format as 'YYYY-MM-DD'
      isCurrentMonth: false,
      isToday: day - 1 === currentDay && isCurrentMonth,
    });
  }}

  const fin = {
    name: `${new Date(year, month).toLocaleString('default', { month: 'long' })}`,
    date: [...days]
  }

  fin.name = fin.name.charAt(0).toUpperCase() + fin.name.slice(1);
  
  return fin;
}

function getWeek(date: Date) {
  const oneJan = new Date(date.getFullYear(), 0, 1);
  const weekNumber = Math.ceil(((date.getTime() - oneJan.getTime()) / 86400000 + oneJan.getDay() + 1) / 7);
  return weekNumber;
}

export { getCalendarDays, getWeek };
