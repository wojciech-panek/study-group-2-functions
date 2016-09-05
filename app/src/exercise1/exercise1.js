import _ from 'ramda';

export function forEach(array, callback) {
  return _.addIndex(_.reduce)((prev, current, index) => {
    callback(current, index);
    return prev;
  }, [], array);
}

export function map(array, callback) {
  return _.addIndex(_.reduce)((prev, current, index) => {
    prev.push(callback(current, index));
    return prev;
  }, [], array);
}

export function filter(array, callback) {
  return _.addIndex(_.reduce)((prev, current, index) => {
    if (callback(current, index)) {
      prev.push(current);
    }
    return prev;
  }, [], array);
}
