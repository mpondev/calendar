import PropTypes from 'prop-types';
import dayjs from 'dayjs';
import DailyCell from '../components/DailyCell/DailyCell';

// Function to add days to the calendar
function InitCalendar({ date }) {
  const year = date.year();
  const month = date.month();
  const firstDayMonth = date.date(1).day();
  let currentMonthCount = 0 - firstDayMonth;

  // FIXME
  // monthGrid is composed by 6 rows (weeks). Implement 5/6 rows depending the days?
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
    <table className="month-grid">
      <thead className="month-grid--head">
        <tr className="weekdays">
          {weekdays.map(day => (
            <th className="weekdays--day" key={day}>
              <span className="header-day">{day}</span>
            </th>
          ))}
        </tr>
      </thead>

      <tbody className="month-grid--body">
        {monthGrid.map((row, i) => (
          <tr className="week" key={i}>
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
  );
}

InitCalendar.propTypes = {
  date: PropTypes.object,
};

export default InitCalendar;
