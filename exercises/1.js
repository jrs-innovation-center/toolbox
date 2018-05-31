// exercises/1.js
/*
Exercise 1

input: [1,2,3]

output: ['one', 'two', 'three']

Create a modifier function that takes a number between 1 and 3
and returns the string version of the number.

Then run the modifier through a map function with the
array [1,2,3] as input, the successful result should be
['one', 'two', 'three']
*/
const map = require('../tools/map')
const number2word = function(number) {
  if (number === 1) {
    return 'one'
  } else if (number === 2) {
    return 'two'
  } else if (number === 3) {
    return 'three'
  }
}
const mylist = [1, 2, 3]
console.log('results', map(number2word, mylist))
