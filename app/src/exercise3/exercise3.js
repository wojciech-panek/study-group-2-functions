import _ from 'lodash';

const forEachRecursive = (collection, iteratee, index = 0) => {
  if (index < collection.length && iteratee(_.nth(collection, index), index, collection) !== false) {
    forEachRecursive(collection, iteratee, ++index);
  }
  return collection;
};

export function forEach(collection, iteratee = R.identity) {
  forEachRecursive(collection, iteratee);
}

export function flatMapDeep(collection, iteratee = _.identity) {
  if (collection.length > 0) {
    return _.concat(_.flattenDeep([iteratee(_.first(collection))]), flatMapDeep(_.drop(collection), iteratee));
  }
  return [];
}
