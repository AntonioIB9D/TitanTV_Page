import { NavLink } from 'react-router-dom';
import ColorizeText from '../Helpers/Highlight';

export default function Navbar() {
  return (
    <div className="flex flex-col items-center gap-2 md:flex-row md:justify-between md:gap-4 p-4 text-[#fffffe] font-bold text-sm">
      <div className="flex gap-2">
        {' '}
        <span>
          <img src="/ElTClown.png" className="w-8" />
        </span>
        <span className="text-xl border-dashed border-b-2 border-indigo-500">
          <ColorizeText text="ElTitanLocoTV" duration={0.1} />
        </span>
      </div>
      <div className="flex md:justify-end items-center gap-4 text-slate-200">
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive
              ? 'text-orange-500 border-b-2 border-orange-500'
              : 'text-orange-500'
          }
        >
          Home
        </NavLink>
        <NavLink
          to="/streaming"
          className={({ isActive }) =>
            isActive
              ? 'text-blue-500 border-b-2 border-blue-500'
              : 'text-blue-500'
          }
        >
          Streaming
        </NavLink>
        <NavLink
          to="/champs"
          className={({ isActive }) =>
            isActive
              ? 'text-yellow-500 border-b-2 border-yellow-500'
              : 'text-yellow-500 '
          }
        >
          Champs
        </NavLink>
        <NavLink
          to="/elo"
          className={({ isActive }) =>
            isActive
              ? 'text-green-500 border-b-2 border-green-500'
              : 'text-green-500 '
          }
        >
          Elo
        </NavLink>
      </div>
    </div>
  );
}
