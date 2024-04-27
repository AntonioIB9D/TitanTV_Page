import { useEffect, useRef } from 'react';
import gsap from 'gsap';

interface ColorizeTextProps {
  text: string;
  duration: number;
}

const ColorizeText: React.FC<ColorizeTextProps> = ({ text, duration }) => {
  const textRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const textElement = textRef.current;

    if (textElement) {
      const letters = textElement.querySelectorAll('span');

      const tl = gsap.timeline();

      letters.forEach((letter) => {
        tl.to(letter, {
          color: '#76E677',
          duration,
          ease: 'power1.inOut',
        });
      });

      letters.forEach((letter) => {
        tl.to(letter, {
          color: 'white',
          duration: 0.1,
          ease: 'power1.inOut',
        });
      });

      letters.forEach((letter) => {
        tl.to(letter, {
          color: '#D97B34',
          duration,
          ease: 'power1.inOut',
        });
      });

      letters.forEach((letter) => {
        tl.to(letter, {
          color: 'white',
          duration: 0.1,
          ease: 'power1.inOut',
        });
      });

      letters.forEach((letter) => {
        tl.to(letter, {
          color: '#4E80EE',
          duration,
          ease: 'power1.inOut',
        });
      });

      letters.forEach((letter) => {
        tl.to(letter, {
          color: 'white',
          duration: 0.1,
          ease: 'power1.inOut',
        });
      });

      tl.repeat(-1);

      return () => {
        tl.kill(); // Limpiar la animación al desmontar el componente
      };
    }
  }, [text, duration]);

  // Convertir el texto en un array de letras
  const letters = text
    .split('')
    .map((char, index) => <span key={index}>{char}</span>);

  return (
    <span ref={textRef} style={{ display: 'inline-block' }}>
      {letters}
    </span>
  );
};

export default ColorizeText;
