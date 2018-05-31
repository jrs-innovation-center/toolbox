const partial = require('../tools/partial')

function join(char, array) {
  return array.join(char)
}

module.exports = partial(2, join)
