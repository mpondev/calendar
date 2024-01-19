import PropTypes from 'prop-types';
import dayjs from 'dayjs';

import './DailyCell.scss';

function DailyCell({ day }) {
  const isCurrentDay =
    day.format('DD-MM-YY') === dayjs().format('DD-MM-YY') ? 'current-day' : '';

  const isPrevMonthDay = day <= dayjs().date(0) ? 'prev-month-day' : '';
  const isNextMonthDay =
    day > dayjs().date(dayjs().daysInMonth()) ? 'next-month-day' : '';

  return (
    <td className="cal-daily-cell">
      <header
        className={`cal-daily-cell--top ${isCurrentDay} ${isPrevMonthDay} ${isNextMonthDay}`}
      >
        <p className="cal-daily-cell--top-day">{day.format('D')}</p>
      </header>
      <div className="cal-daily-cell--body"></div>
    </td>
  );
}

DailyCell.propTypes = {
  day: PropTypes.object,
};

export default DailyCell;
