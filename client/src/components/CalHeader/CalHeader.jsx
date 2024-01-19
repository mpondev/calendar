import CalHeaderBtn from '../CalHeaderBtn/CalHeaderBtn';
import CalHeaderDate from '../CalHeaderDate/CalHeaderDate';
import CalHeaderGoTo from '../CalHeaderGoTo/CalHeaderGoTo';

import './CalHeader.scss';

function CalHeader() {
  return (
    <div className="cal-header">
      <CalHeaderBtn />
      <CalHeaderDate />
      <CalHeaderGoTo />
    </div>
  );
}

export default CalHeader;
