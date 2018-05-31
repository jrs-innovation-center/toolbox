/*
Print numbers 1 to 100, any number divisible by three is
replaced by the word fizz and any divisible by five by the
word buzz. Numbers divisible by both become fizz buzz.

const onehundred = Array(100)
  .fill()
  .map((value, index) => index + 1)
// TODO: FizzBuzz
HINT: use map to transform values to fizz, buzz, and fizzbuzz
*/
const map = require('../tools/map')
const compose = require('../tools/compose')
const the100 = Array(100)
  .fill()
  .map((value, index) => index + 1)

function isDivisibleBy3(num) {
  if (num % 3 === 0) {
    return 'fizz'
  }
  return num
}

function isDivisibleBy5(num) {
  if (num % 5 === 0) {
    return 'buzz'
  }
  return num
}
function isDivisibleBy15(num) {
  if (num % 15 === 0) {
    return 'fizzbuzz'
  }
  return num
}

const fizzbuzz = compose(isDivisibleBy3, isDivisibleBy5, isDivisibleBy15)
const results = map(fizzbuzz, the100)

console.log(results)
