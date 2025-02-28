import React from 'react';
import dayjs from 'dayjs';
import { useUser } from '@clerk/clerk-react';

import { useDateStore } from '../store/dateStore';
import Task from '../components/Task';
import { mockTasks } from '../data/fakeData';

const DayGrid = () => {
  const { isSignedIn } = useUser();
  const { date } = useDateStore();

  const dayHours = Array.from({ length: 24 }, (_, i) => i);

  const filteredTasks = isSignedIn
    ? mockTasks.filter(
        task => dayjs(task.start).format('DD-MM-YY') === date.format('DD-MM-YY')
      )
    : [];

  return (
    <div className="flex-1 overflow-y-auto shadow-sm">
      <table className="h-full w-full table-fixed border-separate border-spacing-0 border-1 border-gray-300">
        <thead className="sticky top-0 bg-white">
          <tr className="h-8">
            <th className="w-18 border-1 border-gray-300 "></th>
            <th className="border-t-1 border-r-1 border-b-1 border-gray-300 font-medium">
              {date.format('dddd')}
            </th>
          </tr>
        </thead>

        <tbody>
          <tr className="h-16 sticky top-8 bg-white">
            <td
              className="border-r-1 border-b-2 border-l-1 border-gray-300 px-1 text-center"
              style={{ borderBottomStyle: 'double' }}
            >
              All-day
            </td>
            <td
              className="border-r-1 border-b-2 border-gray-300"
              style={{ borderBottomStyle: 'double' }}
            >
              {filteredTasks.map(
                task =>
                  dayjs(task.start).format('HH:mm') === '00:00' && (
                    <Task key={task._id} title={task.title} />
                  )
              )}
            </td>
          </tr>

          {dayHours.map(hour => (
            <React.Fragment key={hour}>
              <tr className="h-8">
                <td
                  className="border-r-1 border-b-1 border-l-1 border-gray-300 text-center"
                  style={{ borderBottomColor: 'oklch(0.928 0.006 264.531)' }}
                >
                  {hour}:00
                </td>
                <td
                  className="border-r-1 border-b-1 border-gray-300"
                  style={{ borderBottomColor: 'oklch(0.928 0.006 264.531)' }}
                >
                  {filteredTasks.map(task => {
                    if (
                      dayjs(task.start).format('HH:mm') !== '00:00' &&
                      dayjs(task.start).format('H') === hour.toString() &&
                      dayjs(task.start).format('mm') < 30
                    ) {
                      return <Task key={task._id} title={task.title} />;
                    }
                  })}
                </td>
              </tr>

              <tr className="h-8">
                <td className="border-r-1 border-b-1 border-l-1 border-gray-300"></td>
                <td className="border-r-1 border-b-1 border-gray-300">
                  {filteredTasks.map(task => {
                    if (
                      dayjs(task.start).format('HH:mm') !== '00:00' &&
                      dayjs(task.start).format('H') === hour.toString() &&
                      dayjs(task.start).format('mm') >= 30
                    ) {
                      return <Task key={task._id} title={task.title} />;
                    }
                  })}
                </td>
              </tr>
            </React.Fragment>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DayGrid;
