const partial = require('../tools/partial')

/**
 * map
 *
 * copy and modify array with a callback function
 *
 * @param modifier {function} - callback function
 * @param list {array} - list of items
 */
function map(modifier, list) {
  let result = []
  for (let i = 0; i < list.length; i++) {
    result.push(modifier(list[i]))
  }
  return result
}

module.exports = partial(2, map)
