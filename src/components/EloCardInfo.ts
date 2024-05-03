export type dataProps = {
  modeName: string;
  image: string;
  eloName: string;
  winrate: number;
  lp: number;
};

export const dataElo: dataProps[] = [
  {
    modeName: 'Solo/Duo',
    image: '/Esmeralda.png',
    eloName: 'Esmeralda II',
    winrate: 43,
    lp: 50,
  },
  {
    modeName: 'Flexible',
    image: '/Esmeralda.png',
    eloName: 'Esmeralda IV',
    winrate: 80,
    lp: 34,
  },
];
