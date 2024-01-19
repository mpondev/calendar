import { FaArrowRight } from 'react-icons/fa';

import './CalHeaderGoTo.scss';

function CalHeaderGoTo() {
  return (
    <div className="goto-today">
      <div className="goto">
        <input
          type="text"
          placeholder="mm/yyyy"
          className="date-input"
          id="date-input"
        ></input>
        <button className="goto-btn">
          <FaArrowRight />
        </button>
      </div>
      <button className="today-btn">today</button>
    </div>
  );
}

export default CalHeaderGoTo;
