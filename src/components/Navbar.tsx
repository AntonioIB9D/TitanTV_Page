import { Link } from 'react-router-dom';
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
        <Link to="/" className="text-orange-500">
          Home
        </Link>
        <Link to="/streaming" className="text-blue-500 ">
          Streaming
        </Link>
        <Link to="/champs" className="text-yellow-500 ">
          Champs
        </Link>
        <Link to="/elo" className="text-green-500 ">
          Elo
        </Link>
      </div>
    </div>
  );
}
