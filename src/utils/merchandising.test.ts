import { describe, expect, it } from 'vitest';
import { calculateMerchandisingPriority } from './merchandising';

describe('calculateMerchandisingPriority', () => {
  it('adds a 5 point bonus for deliveries after 03:00 and before 08:00', () => {
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

  it('adds a 10 point bonus for a 03:00 delivery', () => {
    const store = {
      id: 2,
      name: 'Test Store 2',
      city: 'Yakima',
      volumeScore: 10,
      deliveryWindowStart: '03:00',
      deliveryWindowEnd: '07:00',
    };
    const result = calculateMerchandisingPriority(store);
    expect(result).toBe(20);
  });

  it('adds a 10 point bonus for deliveries from 18:00 - 11:59', () => {
    const store = {
      id: 3,
      name: 'Test Store 3',
      city: 'Bremerton',
      volumeScore: 9,
      deliveryWindowStart: '22:00',
      deliveryWindowEnd: '02:00',
    };
    const result = calculateMerchandisingPriority(store);
    expect(result).toBe(19);
  });

  it('adds a 10 point bonus for deliveries from 00:00 - 03:00', () => {
    const store = {
      id: 4,
      name: 'Test Store 4',
      city: 'Bellevue',
      volumeScore: 6,
      deliveryWindowStart: '01:00',
      deliveryWindowEnd: '06:00',
    };
    const result = calculateMerchandisingPriority(store);
    expect(result).toBe(16);
  });

  it('adds no bonus to deliveries between 08:00 and 17:59', () => {
    const store = {
      id: 5,
      name: 'Test Store 5',
      city: 'Puyallup',
      volumeScore: 3,
      deliveryWindowStart: '10:00',
      deliveryWindowEnd: '14:00',
    };
    const result = calculateMerchandisingPriority(store);
    expect(result).toBe(3);
  });

  it('adds a 10 point bonus for a 18:00 delivery', () => {
    const store = {
      id: 6,
      name: 'Test Store 6',
      city: 'Auburn',
      volumeScore: 4,
      deliveryWindowStart: '18:00',
      deliveryWindowEnd: '21:00',
    };
    const result = calculateMerchandisingPriority(store);
    expect(result).toBe(14);
  });
});
