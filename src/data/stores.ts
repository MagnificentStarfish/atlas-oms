export type Store = {
  id: number;
  name: string;
  city: string;
  volumeScore: number;
  deliveryWindowStart: string;
  deliveryWindowEnd: string;
};

export const stores: Store[] = [
  {
    id: 1,
    name: 'Dollar Tree #9595',
    city: 'Bremerton',
    volumeScore: 2,
    deliveryWindowStart: '11:00',
    deliveryWindowEnd: '15:00',
  },

  {
    id: 2,
    name: 'Fred Meyer #265',
    city: 'Puyallup',
    volumeScore: 8,
    deliveryWindowStart: '19:00',
    deliveryWindowEnd: '23:00',
  },
  {
    id: 3,
    name: 'Walmart #3705',
    city: 'Yelm',
    volumeScore: 7,
    deliveryWindowStart: '04:00',
    deliveryWindowEnd: '08:00',
  },
  {
    id: 4,
    name: 'Target #30',
    city: 'Federal Way',
    volumeScore: 5,
    deliveryWindowStart: '08:00',
    deliveryWindowEnd: '12:00',
  },
];
