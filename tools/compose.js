/**
 * compose
 *
 * takes one to many functions and returns a super
 *
 * @param ...fns {functions}
 */
function compose(...fns) {
  return function(value) {
    let result = value
    for (let i = fns.length - 1; i >= 0; i--) {
      result = fns[i](result)
    }
    return result
  }
}

module.exports = compose
