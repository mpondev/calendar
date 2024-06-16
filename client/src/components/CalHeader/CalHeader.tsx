import { FaAngleLeft, FaAngleRight } from 'react-icons/fa6';

import styles from './CalHeader.module.css';

function CalHeader(): JSX.Element {
  return (
    <div className={styles.header}>
      <div className={styles.moveTo}>
        <div className={styles.btnGroup}>
          <button title="Previous month">
            <FaAngleLeft className={styles.fa} />
          </button>
          <button title="Next month">
            <FaAngleRight className={styles.fa} />
          </button>
        </div>
        <button title="Today" className={styles.today}>
          today
        </button>
      </div>

      <div className={styles.date}>
        <h2>April 2024</h2>
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
