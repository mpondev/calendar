import { useState } from 'react';
import dayjs from 'dayjs';
import InitCalendar from '../../helpers/initCalendar';

import './MonthGrid.scss';

function MonthGrid() {
  const [date, setDate] = useState(dayjs());

  return (
    <div className="month-grid">
      <InitCalendar date={date} />
    </div>
  );
}

export default MonthGrid;
