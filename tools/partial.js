/**
 * partial
 *
 * convert a function to a partial capable function
 *
 * @param n {Number} - number of arguments
 * @param fn {function} - partial functtion
 *
 */
function partial(n, fn) {
  return function(...args) {
    if (args.length === n) {
      return fn.apply(null, args)
    }
    return function(...rest) {
      return fn.apply(null, args.concat(rest))
    }
  }
}

module.exports = partial
