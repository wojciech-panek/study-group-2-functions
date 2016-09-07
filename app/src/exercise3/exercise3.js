import _ from 'ramda';

const forEachRecursive = (collection, iteratee, index = 0) => {
  if (index < collection.length && iteratee(_.nth(collection, index), index, collection) !== false) {
    forEachRecursive(collection, iteratee, ++index);
  }
  return collection;
};

export function forEach(collection, iteratee = _.identity) {
  forEachRecursive(collection, iteratee);
}

export function flatMapDeep(collection, iteratee = _.identity) {
  
}
