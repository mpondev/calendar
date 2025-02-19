import dayjs from 'dayjs';
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa6';
import { useDateStore } from '../store/dateStore';

const CalHeader = () => {
  const { date, setDate } = useDateStore();

  const handlePrev = () => {
    setDate(dayjs(date).subtract(1, 'month'));
  };

  const handleNext = () => {
    setDate(dayjs(date).add(1, 'month'));
  };

  const handleToday = () => {
    setDate(dayjs());
  };

  return (
    <div className="mb-4 flex w-full items-center justify-between p-4">
      <div className="flex gap-4">
        <div className="flex first:rounded-tl-md first:rounded-bl-md last:rounded-tr-md last:rounded-br-md">
          <button
            onClick={handlePrev}
            className="cursor-pointer rounded-tl-md  rounded-bl-md border-1 border-slate-700 bg-slate-700 px-2 py-2 text-center align-middle text-white hover:border-slate-900 hover:bg-slate-800"
            title="Previous month"
          >
            <FaAngleLeft className="size-6" />
          </button>
          <button
            onClick={handleNext}
            className="cursor-pointer rounded-tr-md  rounded-br-md border-1  border-slate-700 bg-slate-700 px-2 py-2 text-center align-middle text-white hover:border-slate-900 hover:bg-slate-800"
            title="Next month"
          >
            <FaAngleRight className="size-6" />
          </button>
        </div>
        <button
          onClick={handleToday}
          className="cursor-pointer border-1  border-slate-700 bg-slate-700 px-2 py-2 text-center align-middle text-lg text-white hover:border-slate-900 hover:bg-slate-800 rounded-md"
          title="Today"
        >
          today
        </button>
      </div>

      <div className="text-4xl leading-12 text-slate-700">
        <h2>
          {date.format('MMM')} {date.year()}
        </h2>
      </div>

      <div className="">
        <button
          className="cursor-pointer rounded-tl-md  rounded-bl-md border-1  border-slate-700 bg-slate-700 px-2 py-2 text-center align-middle text-lg text-white hover:border-slate-900 hover:bg-slate-800"
          title="Month view"
        >
          month
        </button>
        <button
          className="cursor-pointer border-1  border-slate-700 bg-slate-700 px-2 py-2 text-center align-middle text-lg text-white hover:border-slate-900 hover:bg-slate-800"
          title="Week view"
        >
          week
        </button>
        <button
          className="cursor-pointer border-1  border-slate-700 bg-slate-700 px-2 py-2 text-center align-middle text-lg text-white hover:border-slate-900 hover:bg-slate-800"
          title="Day view"
        >
          day
        </button>
        <button
          className="cursor-pointer rounded-tr-md  rounded-br-md border-1  border-slate-700 bg-slate-700 px-2 py-2 text-center align-middle text-lg text-white hover:border-slate-900 hover:bg-slate-800"
          title="List view"
        >
          list
        </button>
      </div>
    </div>
  );
};

export default CalHeader;
