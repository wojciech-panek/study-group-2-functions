import {forEach, map, filter, some, reduceRight} from './src/exercise1/exercise1';

forEach([1,2,3], function (item, index) {
  console.log(item + ' ' + index);
});
console.log(map([2,4,8], (item, index) => item * item));
console.log(filter([2, 5, 7, 9, 12], (item, index) => item % 2));
console.log(some([2, 5, 7, 9, 12], (item, index) => item > 25));
console.log(reduceRight((prev, current) => prev + current, 0, [1,2,3]));
