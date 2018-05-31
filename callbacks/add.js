const partial = require('../tools/partial')

/**
 * add
 *
 * add two numbers
 *
 * @param a {Number} - first number
 * @param b {Number} - second numbers
 */
function add(a, b) {
  return a + b
}

module.exports = partial(2, add)
