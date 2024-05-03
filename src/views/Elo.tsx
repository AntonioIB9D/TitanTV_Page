import { dataElo } from '../components/EloCardInfo';
import EloCart from '../components/EloCart';

export default function Elo() {
  return (
    <div className="flex flex-col gap-8 md:grid md:grid-cols-2 p-4">
      {dataElo.map((data) => (
        <EloCart data={data} key={data.modeName} />
      ))}
    </div>
  );
}
