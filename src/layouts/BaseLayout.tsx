import { type FC } from 'react';
import { Outlet } from 'react-router-dom';

import { ThemeToggler } from '@/components/ThemeToggler';

export const BaseLayout: FC = () => (
  <div className="flex flex-col">
    <header className="flex p-2 border-b items-center">
      <span className="font-bold">Test App</span>
      <div className="ml-auto">
        <ThemeToggler />
      </div>
    </header>
    <main className="flex-1 container py-2">
      <Outlet />
    </main>
  </div>
);
