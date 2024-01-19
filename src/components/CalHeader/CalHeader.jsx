import CalHeaderBtn from '../CalHeaderBtn/CalHeaderBtn';
import CalHeaderGoTo from '../CalHeaderGoTo/CalHeaderGoTo';

import './CalHeader.scss';

function CalHeader() {
  return (
    <div className="cal-header">
      <CalHeaderBtn />
      <CalHeaderGoTo />
    </div>
  );
}

export default CalHeader;
