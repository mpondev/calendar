import { FaAngleLeft, FaAngleRight } from 'react-icons/fa';
import { useDate } from '../../context/DateContext';
import dayjs from 'dayjs';

import './CalHeaderBtn.scss';

function CalHeaderBtn() {
  const { date, setDate } = useDate();

  function handlePrev() {
    setDate(date.subtract(1, 'month'));
  }
  function handleNext() {
    setDate(date.add(1, 'month'));
  }

  return (
    <div className="cal-header-btn">
      <FaAngleLeft onClick={handlePrev} className="fa" />
      <FaAngleRight onClick={handleNext} className="fa" />
    </div>
  );
}

export default CalHeaderBtn;
