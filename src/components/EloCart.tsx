import { dataProps } from './EloCardInfo';

type EloCartProps = {
  data: dataProps;
};

export default function EloCart({ data }: EloCartProps) {
  return (
    <div className="flex flex-col items-center gap-4 bg-[#181616] rounded-xl p-4 border-2 border-emerald-500">
      <span className="font-bold">
        División{' '}
        <span
          className={
            data.modeName === 'Solo/Duo' ? 'text-red-500' : 'text-blue-600'
          }
        >
          {data.modeName}
        </span>
      </span>
      <span>
        <img src="/Esmeralda.png" alt="Imagen Elo Esmeralda" className="w-48" />
      </span>
      <span className="text-green-600 font-bold">{data.eloName}</span>
      <div className="flex gap-12">
        <div className="text-center">
          <p className="font-bold">Winrate</p>
          <p className="text-amber-400 font-bold">{data.winrate} %</p>
        </div>
        <div className="text-center">
          <p className="font-bold">LP</p>
          <p className="text-yellow-500 font-bold">{data.lp}</p>
        </div>
      </div>
    </div>
  );
}
