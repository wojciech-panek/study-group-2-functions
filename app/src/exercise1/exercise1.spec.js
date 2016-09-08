import {forEach, map, filter, some, reduceRight} from './exercise1';
import sinon from 'sinon';

describe('exercise1', () => {
  describe('forEach', () => {
    it('is callback called on filled array', () => {
      const callback = sinon.spy();
      forEach([1,2,3], callback);
      expect(callback.called).toEqual(true);
    });
    it('is callback not called on empty array', () => {
      const callback = sinon.spy();
      forEach([], callback);
      expect(callback.called).toEqual(false);
    });
  });
  describe('map', () => {
    it('maps simple functions over arrays', () => {
      expect(map([1, 2, 3], (item, index) => item * 2)).toEqual([2, 4, 6]);
    });
  });
  describe('filter', () => {
    it('reduces an array to those matching a filter', function() {
      expect(filter([-1, 2, 4], x => x % 2 === 0)).toEqual([2, 4]);
    });
    it('returns an empty array if no element matches', function() {
      expect(filter([-1, 9, 99], x => x > 100)).toEqual([]);
    });
    it('returns an empty array if asked to filter an empty array', function() {
      expect(filter([], x => x > 100)).toEqual([]);
    });
  });
  describe('some', () => {
    it('returns true when one value passes', function() {
      expect(some([-1, 2, 4], x => x < 0)).toEqual(true);
    });
    it('returns false when no values pass', function() {
      expect(some([-1, 2, 4], x => x > 5)).toEqual(false);
    });
  });
  describe('reduceRight', () => {
    it('joins lists in the right order', function() {
      expect(reduceRight(['a', 'b', 'c', 'd'], (a, b) => a + b, '')).toEqual('dcba');
    });
    it('returns the accumulator for an empty array', function() {
      expect(reduceRight([], (a, b) => a + b, 0 )).toEqual(0);
    });
  });
});
