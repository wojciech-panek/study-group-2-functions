import {words, arrayAdd, smallest} from './exercise2';

describe('exercise2', () => {
  describe('words', () => {
    it('checks if array has proper size', () => {
      const wordsString = 'abc def ghi';
      expect(words(wordsString).length).toEqual(3);
    });
    it('checks if array has proper size when no space is given', () => {
      const wordsString = 'abcdefghi';
      expect(words(wordsString).length).toEqual(1);
    });
    it('checks if array with empty string is returned when string is empty', () => {
      const wordsString = '';
      expect(words(wordsString)).toEqual(['']);
    });
    it('checks if words are returned properly', () => {
      const wordsString = 'abc def ghi';
      expect(words(wordsString)).toEqual(['abc', 'def', 'ghi']);
    });
  });

  describe('arrayAdd', () => {
    it('checks if returned array has proper size', () => {
      const numbers = [1, 2, 3];
      const value = 1;
      expect(arrayAdd(value, numbers).length).toEqual(3);
    });
    it('checks if returned array has proper size when there is no numbers', () => {
      const numbers = [];
      const value = 1;
      expect(arrayAdd(value, numbers).length).toEqual(0);
    });
    it('checks if proper value is returned for positive numbers', () => {
      const numbers = [1, 2, 3];
      const value = 1;
      expect(arrayAdd(value, numbers)).toEqual([2, 3, 4]);
    });
    it('checks if proper value is returned for both positive and negative numbers', () => {
      const numbers = [1, -2, 3];
      const value = -4;
      expect(arrayAdd(value, numbers)).toEqual([-3, -6, -1]);
    });
  });

  describe('smallest', () => {
    it('checks if proper value is returned with positive numbers', () => {
      const numbers = [2, 1, 3];
      expect(smallest(numbers)).toEqual(1);
    });
    it('checks if proper value is returned with both positive and negative numbers', () => {
      const numbers = [-2, 1, -3];
      expect(smallest(numbers)).toEqual(-3);
    });
  });
});
