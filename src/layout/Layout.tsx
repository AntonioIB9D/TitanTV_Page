import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';

export default function Layout() {
  return (
    <div className="flex flex-col min-h-full">
      <header>
        <Navbar />
      </header>
      <div className="flex flex-col flex-1">
        <main className=" flex justify-center items-center h-[85vh] md:h-[90vh]">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
