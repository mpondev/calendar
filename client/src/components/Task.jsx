import PropTypes from 'prop-types';
import { useLocation } from 'react-router';

const Task = ({ start, title }) => {
  const hasTime = start !== '00:00';

  const { pathname } = useLocation();

  return (
    <>
      {(pathname === '/month' || pathname === '/week') && (
        <div className="flex text-sm px-1 gap-2">
          {hasTime && <div className="font-light">{start}</div>}
          <div className="truncate font-medium hover:z-20 hover:translate-y-[-10%] hover:overflow-visible hover:rounded-2xl hover:border-2 hover:border-[#256d85] hover:bg-slate-300 hover:px-2">
            {title}
          </div>
        </div>
      )}
      {pathname === '/day' && (
        <div className="flex text-sm px-1 gap-2">
          {hasTime && <div className="font-light">{start}</div>}
          <div className="font-medium hover:z-20 hover:translate-y-[-10%] hover:overflow-visible hover:rounded-2xl hover:border-2 hover:border-[#256d85] hover:bg-slate-300 hover:px-2">
            {title}
          </div>
        </div>
      )}
    </>
  );
};

Task.propTypes = {
  start: PropTypes.string,
  title: PropTypes.string.isRequired,
};

export default Task;
