import { Task as TaskType } from '../../data/fakeData';

import styles from './Task.module.css';

function Task({ start, title }: TaskType): JSX.Element {
  const hasTime: boolean = start !== '00:00';

  return (
    <div className={styles.task}>
      {hasTime && <div className={styles.time}>{start}</div>}
      <div className={styles.title}>{title}</div>
    </div>
  );
}

export default Task;
