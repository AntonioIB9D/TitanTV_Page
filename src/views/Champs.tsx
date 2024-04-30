import Card from '../components/Card';
import { data } from '../components/CardInfo';

export default function Champs() {
  return (
    <section className="flex flex-col gap-4 mt-4 p-4 md:grid md:grid-cols-2 md:mt-0 lg:grid-cols-4 lg:mt-0">
      {data.map((data) => (
        <Card data={data} />
      ))}
    </section>
  );
}
