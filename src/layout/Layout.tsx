import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';

export default function Layout() {
  return (
    <>
      <div className="container-app">
        <header>
          <Navbar />
        </header>
        <main className="content-main">
          <Outlet />
        </main>
      </div>
    </>
  );
}
