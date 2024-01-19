import CalHeader from '../CalHeader/CalHeader';
import MonthGrid from '../MonthGrid/MonthGrid';

import './CalContainer.scss';

function CalContainer() {
  return (
    <div className="cal-container">
      <CalHeader />
      <MonthGrid />
    </div>
  );
}

export default CalContainer;
