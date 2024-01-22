import { DateProvider } from '../../context/DateContext';
import InitCalendar from '../../helpers/initCalendar';

import './MonthGrid.scss';

function MonthGrid() {
  return (
    <div className="month-grid">
      <InitCalendar />
    </div>
  );
}

export default MonthGrid;
