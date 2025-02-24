import React from 'react';

import { useDateStore } from '../store/dateStore';

const DayGrid = () => {
  const { date } = useDateStore();

  const dayHours = Array.from({ length: 24 }, (_, i) => i);

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
            ></td>
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
                ></td>
              </tr>

              <tr className="h-8">
                <td className="border-r-1 border-b-1 border-l-1 border-gray-300"></td>
                <td className="border-r-1 border-b-1 border-gray-300"></td>
              </tr>
            </React.Fragment>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DayGrid;
