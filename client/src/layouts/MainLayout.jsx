import { Outlet } from 'react-router';
import {
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton,
} from '@clerk/clerk-react';

import CalHeader from '../components/CalHeader';

const MainLayout = () => {
  return (
    <div className="flex h-screen w-screen">
      <div className="absolute top-6 right-6 cursor-pointer">
        <SignedIn>
          <UserButton />
        </SignedIn>
        <SignedOut>
          <SignInButton
            mode="modal"
            className="rounded-md bg-[#256d85] text-white p-2 border-1 hover:border-slate-900 hover:bg-slate-800"
          />
        </SignedOut>
      </div>
      <div className="relative m-auto flex h-9/10 w-7/10 flex-col justify-center border-t-5 border-t-[#256d85] bg-white p-4">
        <CalHeader />
        <Outlet />
      </div>
    </div>
  );
};

export default MainLayout;
