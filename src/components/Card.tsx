import { dataProps } from './CardInfo';

type CardProps = {
  data: dataProps;
};

export default function Card({ data }: CardProps) {
  return (
    <div className="bg-[#181616] rounded-xl max-h-[24rem] hover:cursor-pointer ">
      <div className="flex flex-col gap-4 items-center p-4">
        <span className="text-emerald-600 font-bold">SE BUSCA</span>
        <span>
          <img src={data.photo} className="w-32" />
        </span>
        <span className="font-bold">{data.nombre}</span>
        <span className="font-bold">{data.frase}</span>
        <div className="flex gap-4">
          <div className="flex gap-2 items-center">
            <span>
              <img src="/Ad_Icon.jpg" alt="Attack Damage Icon" />
            </span>
            <span className="text-red-600 font-bold">{data.ad}</span>
          </div>
          <div className="flex gap-2 items-center">
            <span>
              <img src="/Health_icon.jpg" alt="Health Icon" />
            </span>
            <span className="text-green-600 font-bold">{data.health}</span>
          </div>
          <div className="flex gap-2 items-center">
            <span>
              <img src="/Mr_Icon.jpg" alt="Magical Resistance Icon" />
            </span>
            <span className="text-blue-600 font-bold">{data.mr}</span>
          </div>
        </div>
        <div className="flex gap-4">
          <div className="flex gap-2 items-center">
            <span>
              <img src="/Armor_icon.jpg" alt="Armor Icon" />
            </span>
            <span className="text-amber-600 font-bold">{data.armor}</span>
          </div>
          <div className="flex gap-2 items-center">
            <span>
              <img src="/Ms_Icon.jpg" alt="Move Speed Icon" />
            </span>
            <span className="font-bold">{data.ms}</span>
          </div>
          <div className="flex gap-2 items-center">
            <span>
              <img src="/Range_icon.jpg" alt="Range Icon" />
            </span>
            <span className="text-orange-600 font-bold">{data.range}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
