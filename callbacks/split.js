const partial = require('../tools/partial')

function split(char, string) {
  return string.split(char)
}

module.exports = partial(2, split)
