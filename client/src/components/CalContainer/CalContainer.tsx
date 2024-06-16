import CalHeader from '../CalHeader/CalHeader';
import MonthGrid from '../MonthGrid/MonthGrid';

import styles from './CalContainer.module.css';

function CalContainer(): JSX.Element {
  return (
    <div className={styles.container}>
      <CalHeader />
      <MonthGrid />
    </div>
  );
}

export default CalContainer;
