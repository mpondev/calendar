import dayjs from 'dayjs';

import Task from '../Task/Task';
import { useDateStore } from '../../store/dateStore';
import { mockTasks } from '../../data/fakeData';

import styles from './DailyCell.module.css';

interface Props {
  day: dayjs.Dayjs;
}

function DailyCell({ day }: Props): JSX.Element {
  const { date } = useDateStore();

  const isCurrentDay = day.format('DD-MM-YY') === dayjs().format('DD-MM-YY');
  const isPrevMonth = day <= dayjs(date).date(0);
  const isNextMonth = day > dayjs(date).date(date.daysInMonth());

  return (
    <td
      className={
        isCurrentDay
          ? `${styles.dailyCell} ${styles.currentDay}`
          : `${styles.dailyCell}`
      }
    >
      <div className={styles.cellWrapper}>
        <header className={styles.top}>
          <p
            className={isPrevMonth || isNextMonth ? `${styles.otherMonth}` : ''}
          >
            {day.format('D')}
          </p>
        </header>
        <div className={styles.body}>
          {mockTasks.map(task => {
            if (
              dayjs(task.start).format('DD-MM-YY') === day.format('DD-MM-YY')
            ) {
              return (
                <Task
                  // _id={task._id}
                  {...task}
                  key={task._id}
                  start={dayjs(task.start).format('HH:mm')}
                  title={task.title}
                />
              );
            }
          })}
        </div>
      </div>
    </td>
  );
}

export default DailyCell;
