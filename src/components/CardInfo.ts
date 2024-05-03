export type dataProps = {
  nombre: string;
  photo: string;
  frase: string;
  ad: number;
  health: number;
  mr: number;
  armor: number;
  ms: number;
  range: number;
};

export const data: dataProps[] = [
  {
    nombre: 'SION',
    photo: '/Sion.jpg',
    frase: 'El coloso no muerto',
    ad: 66,
    health: 655,
    mr: 32,
    armor: 32,
    ms: 345,
    range: 175,
  },
  {
    nombre: 'DARIUS',
    photo: '/Darius2.jpg',
    frase: 'La mano de Noxus',
    ad: 64,
    health: 652,
    mr: 32,
    armor: 39,
    ms: 340,
    range: 175,
  },
  {
    nombre: 'Aurelion Sol',
    photo: '/Aurelion.jpg',
    frase: 'El forjador de estrellas',
    ad: 55,
    health: 620,
    mr: 30,
    armor: 22,
    ms: 335,
    range: 550,
  },
  {
    nombre: 'Alistar',
    photo: '/Alistar.jpg',
    frase: 'El minotauro',
    ad: 62,
    health: 685,
    mr: 32,
    armor: 47,
    ms: 330,
    range: 125,
  },
  {
    nombre: 'Veigar',
    photo: '/Veigar.jpg',
    frase: 'El pequeño maestro del mal',
    ad: 52,
    health: 580,
    mr: 32,
    armor: 18,
    ms: 340,
    range: 550,
  },
];
