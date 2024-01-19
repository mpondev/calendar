import dayjs from 'dayjs';

import './CalHeaderDate.scss';

function CalHeaderDate() {
  const month = dayjs().format('MMM');
  const year = dayjs().year();

  return (
    <div className="cal-header-date">
      {month} {year}
    </div>
  );
}

export default CalHeaderDate;
