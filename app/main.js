import {forEach, map, filter, some, reduceRight} from './src/exercise1/exercise1';
import {words, arrayAdd, smallest} from './src/exercise2/exercise2';
import {avgLengthOverall, avgLengthEvery, getAlbums} from './src/exercise4/exercise4';

console.log(getAlbums());
console.log(avgLengthOverall());
console.log(avgLengthEvery());

console.log('--------EXERCISE 2-----------');
console.log('WORDS:', words('a b cd'));
console.log('ADD:', arrayAdd(3, [1, 2, 3]));
console.log('SMALLEST:', smallest([1, -2, 3]));

console.log(map([2,4,8], (item, index) => item * item));
console.log(filter([2, 5, 7, 9, 12], (item, index) => item % 2));
console.log(some([2, 5, 7, 9, 12], (item, index) => item > 25));
console.log(reduceRight((prev, current) => prev + current, 0, [1,2,3]));
