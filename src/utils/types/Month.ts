export type Month = {
  name: string;
  date: {
    date: string, // YYYY-MM-DD
    isCurrentMonth?: boolean,
    isToday?: boolean,
    isSelected?: boolean,
  }[]
}