import { useDateStore } from '../store/dateStore';

const ListGrid = () => {
  const { date } = useDateStore();

  return (
    <div className="flex-1 overflow-y-auto shadow-sm">
      <table className="h-full w-full table-fixed border-separate border-spacing-0 border-1 border-gray-300">
        <thead className="sticky top-0 bg-slate-100">
          <tr className="h-8">
            <th className="flex justify-between border-1 border-gray-300 px-4 py-2 font-medium">
              <span>{date.format('dddd')}</span>
              <span>{date.format('D-MMM-YYYY')}</span>
            </th>
          </tr>
        </thead>
        <tbody></tbody>
      </table>
    </div>
  );
};

export default ListGrid;
