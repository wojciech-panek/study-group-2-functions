import R from 'ramda';

const add = (a, b) => a + b;

const less = (a, b) => a < b ? a : b;

export const words = R.split(' ');

export const arrayAdd = (number, array) => R.map(R.partial(add, [number]), array);

export const smallest = R.reduce(less, Infinity);
