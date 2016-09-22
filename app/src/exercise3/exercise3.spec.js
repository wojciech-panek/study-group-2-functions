import _ from 'lodash';
import sinon from 'sinon';
import {forEach, flatMapDeep} from './exercise3';

describe('exercise3', () => {
  describe('forEach', () => {
    it('executes callback for each element', () => {
      const callback = sinon.spy(),
        collection = [{}, 1, ['a', 'b']];
      forEach(collection, callback);
      expect(callback.callCount).toEqual(3);
    });

    it('executes callback with proper arguments', () => {
      const callback = sinon.spy(),
        element = {},
        collection = [element];
      forEach(collection, callback);
      expect(callback.calledWith(element, 0, collection)).toBe(true);
    });
  });

  describe('flatMapDeep', () => {
    it('maps flat array properly', () => {
      const callback = a => a + 1,
        collection = [1, 2],
        mappedCollection = flatMapDeep(collection, callback);
      expect(mappedCollection).toEqual([2, 3]);
    });

    it('maps nested array properly', () => {
      const callback = a => [a, a],
        collection = [1, 2, [3, 4]],
        mappedCollection = flatMapDeep(collection, callback);
      expect(mappedCollection).toEqual([1, 1, 2, 2, 3, 4, 3, 4]);
    });

    it('maps empty array properly', () => {
      const callback = _.noop,
        collection = [],
        mappedCollection = flatMapDeep(collection, callback);
      expect(mappedCollection).toEqual([]);
    });
  });
});
