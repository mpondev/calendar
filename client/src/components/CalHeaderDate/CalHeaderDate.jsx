import { useDate } from '../../context/DateContext';
import dayjs from 'dayjs';

import './CalHeaderDate.scss';

function CalHeaderDate() {
  const { date } = useDate();

  const month = date.format('MMM');
  const year = date.year();

  return (
    <div className="cal-header-date">
      {month} {year}
    </div>
  );
}

export default CalHeaderDate;
