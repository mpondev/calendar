import PropTypes from 'prop-types';
import dayjs from 'dayjs';
import { useUser } from '@clerk/clerk-react';

import { useDateStore } from '../store/dateStore.js';
import Task from './Task.jsx';

const DailyCell = ({ day, tasks }) => {
  const { isSignedIn } = useUser();
  const { date } = useDateStore();

  const isCurrentDay = day.format('DD-MM-YY') === dayjs().format('DD-MM-YY');
  const isPrevMonth = day <= dayjs(date).date(0);
  const isNextMonth = day > dayjs(date).date(date.daysInMonth());

  return (
    <td
      className={`border-1 border-gray-300 ${
        isCurrentDay ? 'bg-slate-100' : ''
      }`}
    >
      <div className="h-full flex flex-col">
        <header className="flex flex-row-reverse">
          <p
            className={`p-2 ${isPrevMonth || isNextMonth ? 'opacity-30' : ''}`}
          >
            {day.format('D')}
          </p>
        </header>
        <div className="mx-1 flex-1">
          {isSignedIn &&
            tasks.map(task => {
              if (
                dayjs(task.start).format('DD-MM-YY') === day.format('DD-MM-YY')
              ) {
                return (
                  <Task
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
};

DailyCell.propTypes = {
  day: PropTypes.object.isRequired,
  tasks: PropTypes.array,
};

export default DailyCell;
