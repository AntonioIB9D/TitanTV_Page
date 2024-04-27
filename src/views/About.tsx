export default function About() {
  return (
    <div className="text-[#fffffe] font-bold flex flex-col gap-4">
      <div className="flex justify-center">
        <h1 className=" text-2xl md:text-3xl">
          <span className="text-red-500">¿</span> Te{' '}
          <span className="text-blue-500">gustaría</span> apoyarme{' '}
          <span className="text-amber-500">?</span>
        </h1>
      </div>
      <div className="flex justify-center">
        <img src="/ElTLocoR.png" className=" w-40 md:w-44" />
      </div>
      <div className="md:flex justify-center">
        <p className=" text-center mb-2">
          " Pásate por el canal de{' '}
          <span className="text-[#5D2DAA]">twitch</span> y regalame un{' '}
          <span className="text-[#9A46C2]">follow</span> -{' '}
          <span className="text-green-500">ElTTitanLoco</span> "
        </p>
      </div>
      <div className="grid grid-cols-2 p-4 gap-4 md:flex md:justify-between md:gap-12">
        <div className="bg-[#181616] max-w-60 justify-self-center ">
          <div className="border-t-8 border-green-500 mt-4">
            <p className="p-4">Directo todos los miércoles, jueves y viernes</p>
          </div>
        </div>
        <div className="bg-[#181616] max-w-60 justify-self-center ">
          <div className="border-t-8 border-[#B009DA] mt-4">
            <p className="p-4">Horario de 9:30 a.m. - 1:30 p.m.</p>
          </div>
        </div>
        <div className="bg-[#181616] max-w-60 justify-self-center">
          <div className="border-t-8 border-[#97DA09] mt-4">
            <p className="p-4">Stream didáctico y de chill</p>
          </div>
        </div>
        <div className="bg-[#181616] max-w-60 justify-self-center">
          <div className="border-t-8 border-[#DA0909] mt-4">
            <p className="p-4">Recompensas para los viewers</p>
          </div>
        </div>
      </div>
    </div>
  );
}
