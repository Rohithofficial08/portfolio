import { Outlet } from 'react-router';

export function Layout() {
  return (
    <div className="min-h-screen bg-[#282c33] flex flex-col overflow-x-hidden">
      <Outlet />
    </div>
  );
}
