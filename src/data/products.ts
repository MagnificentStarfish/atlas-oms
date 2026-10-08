export type Product = {
  id: number;
  name: string;
  casePack: number;
  sizeLabel: string;
  sizeMl: number;
};

const twentyOunceSingleBottleSoda = {
  casePack: 24,
  sizeLabel: '20 oz',
  sizeMl: 591,
};

const twoLiterSingleBottleSoda = {
  casePack: 8,
  sizeLabel: '2 Liter',
  sizeMl: 2000,
};

const sevenPointFiveOunceSixPackSoda = {
  casePack: 4,
  sizeLabel: '7.5 oz',
  sizeMl: 222,
};

export const products: Product[] = [
  {
    id: 1,
    name: 'Classic Coke',
    ...twentyOunceSingleBottleSoda,
  },

  {
    id: 2,
    name: 'Diet Coke',
    ...twentyOunceSingleBottleSoda,
  },

  { id: 3, name: 'Sprite', ...twentyOunceSingleBottleSoda },

  {
    id: 4,
    name: 'Classic Coke',
    ...sevenPointFiveOunceSixPackSoda,
  },

  { id: 5, name: 'Diet Coke', ...sevenPointFiveOunceSixPackSoda },

  { id: 6, name: 'Sprite', ...sevenPointFiveOunceSixPackSoda },

  { id: 7, name: 'Classic Coke', ...twoLiterSingleBottleSoda },

  { id: 8, name: 'Diet Coke', ...twoLiterSingleBottleSoda },

  { id: 9, name: 'Sprite', ...twoLiterSingleBottleSoda },
];
