import CalHeader from './CalHeader';
import MonthGrid from './MonthGrid';

const CalContainer = () => {
  return (
    <div className="relative m-auto flex h-9/10 w-7/10 flex-col justify-center border-t-5 border-t-[#256d85] bg-white p-4">
      <CalHeader />
      <MonthGrid />
    </div>
  );
};

export default CalContainer;
