import { DateProvider } from '../../context/DateContext';
import InitCalendar from '../../helpers/initCalendar';

import './MonthGrid.scss';

function MonthGrid() {
  return (
    <div className="month-grid">
      <DateProvider>
        <InitCalendar />
      </DateProvider>
    </div>
  );
}

export default MonthGrid;
