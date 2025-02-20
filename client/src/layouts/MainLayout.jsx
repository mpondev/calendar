import { Outlet } from 'react-router';

import CalHeader from '../components/CalHeader';

const MainLayout = () => {
  return (
    <div className="flex h-screen w-screen">
      <div className="relative m-auto flex h-9/10 w-7/10 flex-col justify-center border-t-5 border-t-[#256d85] bg-white p-4">
        <CalHeader />
        <Outlet />
      </div>
    </div>
  );
};

export default MainLayout;
