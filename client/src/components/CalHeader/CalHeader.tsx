import dayjs from 'dayjs';
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa6';
import { useDateStore } from '../../store/dateStore';

import styles from './CalHeader.module.css';

function CalHeader(): JSX.Element {
  const { date, setDate } = useDateStore();

  function handlePrev(): void {
    setDate(dayjs(date).subtract(1, 'month'));
  }

  function handleNext(): void {
    setDate(dayjs(date).add(1, 'month'));
  }

  function handleToday(): void {
    setDate(dayjs());
  }

  return (
    <div className={styles.header}>
      <div className={styles.moveTo}>
        <div className={styles.btnGroup}>
          <button onClick={handlePrev} title="Previous month">
            <FaAngleLeft className={styles.fa} />
          </button>
          <button onClick={handleNext} title="Next month">
            <FaAngleRight className={styles.fa} />
          </button>
        </div>
        <button onClick={handleToday} title="Today" className={styles.today}>
          today
        </button>
      </div>

      <div className={styles.date}>
        <h2>
          {date.format('MMM')} {date.year()}
        </h2>
      </div>

      <div>
        <div className={styles.btnGroup}>
          <button title="Month view">month</button>
          <button title="Week view">week</button>
          <button title="Day view">day</button>
          <button title="List view">list</button>
        </div>
      </div>
    </div>
  );
}

export default CalHeader;
