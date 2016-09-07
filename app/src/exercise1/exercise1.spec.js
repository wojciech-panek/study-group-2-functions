import {forEach, map, filter, some, reduceRight} from './exercise1';

describe('exercise2', () => {
  describe('map', () => {
    it('check mapped values', () => {
      expect(map([1, 2, 3], (item, index) => item - 1)).toEqual([0,1,2]);
    });
  });
  describe('filter', () => {
    it('check filtered values', () => {
      expect(filter(['a', 'bb', 'ccc'], (item, index) => item.length > 1)).toEqual(['bb', 'ccc']);
    });
  });
  describe('some', () => {
    it('check if returns truth', () => {
      expect(some(['a', 'bb', 'ccc'], (item, index) => item === 'a')).toEqual(true);
    });
    it('check if returns false', () => {
      expect(some(['a', 'bb', 'ccc'], (item, index) => item.length > 5)).toEqual(false);
    });
  });
});
