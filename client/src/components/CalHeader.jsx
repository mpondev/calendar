import dayjs from 'dayjs';
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa6';

const CalHeader = () => {
  const month = dayjs().format('MMM');
  const year = dayjs().year();

  return (
    <div className="mb-4 flex w-full items-center justify-between p-4">
      <div className="flex gap-4">
        <div className="flex first:rounded-tl-md first:rounded-bl-md last:rounded-tr-md last:rounded-br-md">
          <button
            className="cursor-pointer rounded-tl-md  rounded-bl-md border-1 border-slate-700 bg-slate-700 px-2 py-2 text-center align-middle text-2xl leading-8 text-white hover:border-slate-900 hover:bg-slate-800"
            title="Previous month"
          >
            <FaAngleLeft className="size-8" />
          </button>
          <button
            className="cursor-pointer rounded-tr-md  rounded-br-md border-1  border-slate-700 bg-slate-700 px-2 py-2 text-center align-middle text-2xl leading-8 text-white hover:border-slate-900 hover:bg-slate-800"
            title="Next month"
          >
            <FaAngleRight className="size-8" />
          </button>
        </div>
        <button
          className="cursor-pointer border-1  border-slate-700 bg-slate-700 px-2 py-2 text-center align-middle text-2xl leading-8 text-white hover:border-slate-900 hover:bg-slate-800 rounded-md"
          title="Today"
        >
          today
        </button>
      </div>

      <div className="text-4xl leading-12 text-slate-700">
        <h2>
          {month} {year}
        </h2>
      </div>

      <div className="">
        <div className="">
          <button
            className="cursor-pointer rounded-tl-md  rounded-bl-md border-1  border-slate-700 bg-slate-700 px-2 py-2 text-center align-middle text-2xl leading-8 text-white hover:border-slate-900 hover:bg-slate-800"
            title="Month view"
          >
            month
          </button>
          <button
            className="cursor-pointer border-1  border-slate-700 bg-slate-700 px-2 py-2 text-center align-middle text-2xl leading-8 text-white hover:border-slate-900 hover:bg-slate-800"
            title="Week view"
          >
            week
          </button>
          <button
            className="cursor-pointer border-1  border-slate-700 bg-slate-700 px-2 py-2 text-center align-middle text-2xl leading-8 text-white hover:border-slate-900 hover:bg-slate-800"
            title="Day view"
          >
            day
          </button>
          <button
            className="cursor-pointer rounded-tr-md  rounded-br-md border-1  border-slate-700 bg-slate-700 px-2 py-2 text-center align-middle text-2xl leading-8 text-white hover:border-slate-900 hover:bg-slate-800"
            title="List view"
          >
            list
          </button>
        </div>
      </div>
    </div>
  );
};

export default CalHeader;
