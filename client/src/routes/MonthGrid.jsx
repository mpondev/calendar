import dayjs from 'dayjs';
import { useDateStore } from '../store/dateStore';

import DailyCell from '../components/DailyCell';

const MonthGrid = () => {
  const { date } = useDateStore();

  const year = date.year();
  const month = date.month();
  const firstDayMonth = date.date(1).day();
  let currentMonthCount = 0 - firstDayMonth;

  const monthGrid = new Array(6).fill([]).map(() => {
    return new Array(7).fill(null).map(() => {
      currentMonthCount++;
      return dayjs(new Date(year, month, currentMonthCount));
    });
  });

  const weekdays = new Array(7).fill(null).map((_, i) => {
    return dayjs().day(i).format('ddd');
  });

  return (
    <div className="flex-1">
      <table className="h-full w-full table-fixed border-collapse border-1 border-gray-300">
        <thead>
          <tr>
            {weekdays.map((day, i) => (
              <th key={i} className="border-1 border-gray-300">
                <span>{day}</span>
              </th>
            ))}
          </tr>
        </thead>

        <tbody>
          {monthGrid.map((row, i) => (
            <tr key={i} className="h-1/6">
              {row.map(day => (
                <DailyCell
                  day={day}
                  key={`${day.year()}${day.month()}${day.date()}`}
                />
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MonthGrid;
