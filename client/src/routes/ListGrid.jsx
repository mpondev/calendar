import React from 'react';
import dayjs from 'dayjs';
import { useUser } from '@clerk/clerk-react';

import { useDateStore } from '../store/dateStore';
import { mockTasks } from '../data/fakeData';

const ListGrid = () => {
  const { isSignedIn } = useUser();
  const { date } = useDateStore();

  const weekDay = date.day();
  const weekGrid = Array.from({ length: 7 }, (_, i) =>
    date.clone().subtract(weekDay, 'day').add(i, 'day')
  );

  const filteredTasks = isSignedIn
    ? mockTasks.filter(task =>
        weekGrid.some(
          day => dayjs(task.start).format('DD-MM-YY') === day.format('DD-MM-YY')
        )
      )
    : [];

  return (
    <div className="flex-1 overflow-y-auto shadow-sm">
      <table className="h-full w-full table-fixed border-separate border-spacing-0 border-1 border-gray-300">
        <thead>
          <tr>
            <th></th>
          </tr>
        </thead>

        <tbody className="flex flex-col">
          {weekGrid.map(
            day =>
              filteredTasks.some(
                task =>
                  dayjs(task.start).format('DD-MM-YY') ===
                  day.format('DD-MM-YY')
              ) && (
                <React.Fragment key={day.format('DD-MM-YY')}>
                  <tr>
                    <th className="flex justify-between border-b-1 border-gray-300 bg-slate-200 px-3.5 py-1.5 font-medium">
                      <span>{dayjs(day).format('dddd')} </span>
                      <span>{dayjs(day).format('DD-MMM-YYYY')}</span>
                    </th>
                  </tr>
                  {filteredTasks.map(
                    task =>
                      dayjs(task.start).format('DD-MM-YY') ===
                        dayjs(day).format('DD-MM-YY') && (
                        <tr
                          key={task._id}
                          className="px-3.5 py-1.5 border-b-1 border-gray-300 last:border-b-0"
                        >
                          <td className="flex">
                            <span className="w-1/8">
                              {dayjs(task.start).format('HH:mm') === '00:00'
                                ? 'all-day'
                                : dayjs(task.start).format('HH:mm')}
                            </span>
                            <span className="w-7/8">{task.title}</span>
                          </td>
                        </tr>
                      )
                  )}
                </React.Fragment>
              )
          )}
        </tbody>
      </table>
    </div>
  );
};

export default ListGrid;
