import { FaArrowRight } from 'react-icons/fa';
import { useDate } from '../../context/DateContext';

import './CalHeaderGoTo.scss';
import dayjs from 'dayjs';

function CalHeaderGoTo() {
  const { date, setDate } = useDate();

  function handleClick() {
    setDate(dayjs());
  }

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
      <button className="today-btn" onClick={handleClick}>
        today
      </button>
    </div>
  );
}

export default CalHeaderGoTo;
