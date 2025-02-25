import React from 'react';
import dayjs from 'dayjs';

import { useDateStore } from '../store/dateStore';
import { mockTasks } from '../data/fakeData';
import Task from '../components/Task';

const WeekGrid = () => {
  const { date } = useDateStore();

  const weekDay = date.day();
  const weekGrid = Array.from({ length: 7 }, (_, i) =>
    date.clone().subtract(weekDay, 'day').add(i, 'day')
  );
  const dayHours = Array.from({ length: 24 }, (_, i) => i);

  const filteredTasks = mockTasks.filter(task =>
    weekGrid.some(
      day => dayjs(task.start).format('DD-MM-YY') === day.format('DD-MM-YY')
    )
  );

  return (
    <div className="flex-1 overflow-y-auto shadow-sm">
      <table className="h-full w-full table-fixed border-separate border-spacing-0 border-1 border-gray-300">
        <thead className="sticky top-0 bg-white">
          <tr className="h-8">
            <th className="w-18 border-1 border-gray-300"></th>

            {weekGrid.map((day, i) => (
              <th
                key={i}
                className="w-1/7 border-t-1 border-r-1 border-b-1 border-gray-300 font-medium"
              >{`${day.format('ddd')} ${day.date()}/${day.month() + 1}`}</th>
            ))}
          </tr>
        </thead>

        <tbody>
          <tr className="h-16 sticky top-8 bg-white">
            <td
              className="px-1 border-r-1 border-b-2 border-l-1 border-gray-300 text-center"
              style={{ borderBottomStyle: 'double' }}
            >
              All-day
            </td>
            {weekGrid.map(day => (
              <td
                key={day.format('YYYYMMDD')}
                className={`border-r-1 border-b-2 border-gray-300 text-center first:border-l-1 ${
                  day.format('DD-MM-YY') === dayjs().format('DD-MM-YY')
                    ? 'bg-slate-100'
                    : ''
                }`}
                style={{ borderBottomStyle: 'double' }}
              >
                {filteredTasks.map(task => {
                  if (
                    dayjs(task.start).format('DD-MM-YY') ===
                      day.format('DD-MM-YY') &&
                    dayjs(task.start).format('HH:mm') === '00:00'
                  ) {
                    return <Task key={task._id} title={task.title} />;
                  }
                })}
              </td>
            ))}
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

                {weekGrid.map(day => (
                  <td
                    key={`${day.format('YYYYMMDD')}${hour}:00`}
                    className={`border-r-1 border-b-1 border-gray-300 text-center first:border-l-1 ${
                      day.format('DD-MM-YY') === dayjs().format('DD-MM-YY')
                        ? 'bg-slate-100'
                        : ''
                    }`}
                    style={{ borderBottomColor: 'oklch(0.928 0.006 264.531)' }}
                  >
                    {filteredTasks.map(task => {
                      if (
                        dayjs(task.start).format('DD-MM-YY') ===
                          day.format('DD-MM-YY') &&
                        dayjs(task.start).format('HH:mm') !== '00:00' &&
                        dayjs(day).hour(hour).minute(0).format('HH:mm') <=
                          dayjs(task.start).format('HH:mm') &&
                        dayjs(task.start).format('HH:mm') <=
                          dayjs(day).hour(hour).minute(29).format('HH:mm')
                      ) {
                        return (
                          <Task
                            key={task._id}
                            title={task.title}
                            start={dayjs(task.start).format('HH:mm')}
                          />
                        );
                      }
                    })}
                  </td>
                ))}
              </tr>

              <tr className="h-8">
                <td className="border-r-1 border-b-1 border-l-1 border-gray-300 text-center"></td>

                {weekGrid.map(day => (
                  <td
                    key={`${day.format('YYYYMMDD')}${hour}:30`}
                    className={`border-r-1 border-b-1 border-gray-300 text-center first:border-l-1 ${
                      day.format('DD-MM-YY') === dayjs().format('DD-MM-YY')
                        ? 'bg-slate-100'
                        : ''
                    }`}
                  >
                    {filteredTasks.map(task => {
                      if (
                        dayjs(task.start).format('DD-MM-YY') ===
                          day.format('DD-MM-YY') &&
                        dayjs(day).hour(hour).minute(30).format('HH:mm') <=
                          dayjs(task.start).format('HH:mm') &&
                        dayjs(task.start).format('HH:mm') <=
                          dayjs(day).hour(hour).minute(59).format('HH:mm')
                      ) {
                        return (
                          <Task
                            key={task._id}
                            title={task.title}
                            start={dayjs(task.start).format('HH:mm')}
                          />
                        );
                      }
                    })}
                  </td>
                ))}
              </tr>
            </React.Fragment>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default WeekGrid;
