import _ from 'lodash';

const add = (a, b) => a + b;

const less = (a, b) => a < b ? a : b;

export const words = _.curryRight(_.split)(' ', undefined);

export const arrayAdd = (number, array) => _.map(array, _.partial(add, number));

export const smallest = _.curryRight(_.reduce)(less, Infinity);
