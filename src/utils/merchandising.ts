import type { Store } from '../data/stores';

export function calculateMerchandisingPriority(store: Store) {
  let deliveryBonus = 0;

  if (store.deliveryWindowStart >= '18:00') {
    deliveryBonus = 10;
  } else if (store.deliveryWindowStart < '08:00') {
    deliveryBonus = 5;
  }

  return store.volumeScore + deliveryBonus;
}

export function sortStoresByMerchandisingPriority(stores: Store[]) {
  return [...stores].sort(
    (a, b) =>
      calculateMerchandisingPriority(b) - calculateMerchandisingPriority(a),
  );
}
