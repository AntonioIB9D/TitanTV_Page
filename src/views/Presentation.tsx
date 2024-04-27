import { useEffect, useRef } from 'react';
import gsap from 'gsap';

export default function Presentation() {
  const textRef = useRef<HTMLDivElement>(null);
  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    if (textRef.current) {
      // Creamos una animación para hacer que el texto aparezca gradualmente
      const tl = gsap.timeline({ repeat: -1, yoyo: true });

      gsap.fromTo(
        textRef.current,
        { opacity: 0 }, // Estado inicial: completamente transparente
        {
          opacity: 1, // Estado final: completamente visible
          duration: 2, // Duración de la animación
          stagger: 0.5, // Desfase entre animaciones
          delay: 0.5, // Retardo antes de iniciar la animación
        }
      );
      tl.to(imgRef.current, {
        rotation: 10, // Ángulo de inclinación hacia un lado
        duration: 4 / 2,
        ease: 'power1.inOut', // Ajustar el tipo de easing
      }).to(imgRef.current, {
        rotation: -10, // Ángulo de inclinación hacia el otro lado
        duration: 4 / 2,
        ease: 'power1.inOut',
      });
    }
  }, []);

  return (
    <div className="text-white">
      <div className="text-3xl md:text-5xl lg:text-7xl " ref={textRef}>
        <div className="flex justify-center">
          <img ref={imgRef} src="/ElTLoco.png" className="w-4/12 dropEffect" />
        </div>
        <p className="flex justify-center gap-2 mt-6 font-bold">
          <span>Hola, soy</span>
          <span className="text-green-500 font-bold"> ElTitanLoco</span>
        </p>
        <p className="italic text-xl mt-4 text-center">
          {' '}
          <span className="text-amber-500">Toplaner</span> and{' '}
          <span className="text-blue-500">Midlaner</span>
        </p>
        <div className="flex justify-center gap-2">
          <img src="/Top.png" className="w-12 hover: cursor-pointer" />
          <img src="/Mid.png" className="w-12 hover: cursor-pointer" />
        </div>
      </div>
    </div>
  );
}
