import { describe, expect, it } from 'vitest';
import { calculateMerchandisingPriority } from './merchandising';

describe('calculateMerchandisingPriority', () => {
  it('adds a 5 point bonus for early morning deliveries', () => {
    const store = {
      id: 1,
      name: 'Test Store 1',
      city: 'Tacoma',
      volumeScore: 7,
      deliveryWindowStart: '04:00',
      deliveryWindowEnd: '08:00',
    };
    const result = calculateMerchandisingPriority(store);
    expect(result).toBe(12);
  });

  it('adds a 10 point bonus for late night deliveries', () => {
    const store = {
      id: 2,
      name: 'Test Store 2',
      city: 'Bremerton',
      volumeScore: 9,
      deliveryWindowStart: '22:00',
      deliveryWindowEnd: '02:00',
    };
    const result = calculateMerchandisingPriority(store);

    expect(result).toBe(19);
  });
});
