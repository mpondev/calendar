import dayjs from 'dayjs';
import { useDateStore } from '../../store/dateStore';

import DailyCell from '../DailyCell/DailyCell';

import styles from './MonthGrid.module.css';

function MonthGrid(): JSX.Element {
  const { date } = useDateStore();

  const year: number = date.year();
  const month: number = date.month();
  const firstDayMonth: 0 | 1 | 2 | 3 | 4 | 5 | 6 = date.date(1).day();
  let currentMonthCount: number = 0 - firstDayMonth;

  const monthGrid: dayjs.Dayjs[][] = new Array(6).fill([]).map(() => {
    return new Array(7).fill(null).map(() => {
      currentMonthCount++;
      return dayjs(new Date(year, month, currentMonthCount));
    });
  });

  const weekdays: string[] = new Array(7).fill(null).map((_, i) => {
    return dayjs().day(i).format('ddd');
  });

  return (
    <div className={styles.grid}>
      <table className={styles.table}>
        <thead className={styles.head}>
          <tr>
            {weekdays.map((day, i) => (
              <th key={i}>
                <span>{day}</span>
              </th>
            ))}
          </tr>
        </thead>

        <tbody>
          {monthGrid.map((row, i) => (
            <tr key={i}>
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
}

export default MonthGrid;
