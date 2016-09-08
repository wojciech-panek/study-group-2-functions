import _ from 'lodash';

export function forEach(array, callback) {
  return _.reduce(array, (prev, current, index) => {
    callback(current, index);
    return prev;
  }, []);
}

export function map(array, callback) {
  return _.reduce(array, (prev, current, index) => {
    prev.push(callback(current, index));
    return prev;
  }, []);
}

export function filter(array, callback) {
  return _.reduce(array, (prev, current, index) => {
    if (callback(current, index)) {
      prev.push(current);
    }
    return prev;
  }, []);
}

export function some(array, callback) {
  return _.reduce(array, (prev, current, index) => {
    if (callback(current, index)) {
      prev = true;
    }
    return prev;
  }, false);
}

export function reduceRight(array, callback, accumulator) {
  return _.reduce(_.reverse(array), callback, accumulator);
}
