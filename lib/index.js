/**
 * Modules
 */

var noop = require('@f/noop')

/**
 * Expose switch
 */

module.exports = Switch

/**
 * switch
 */

function Switch (cases) {
  cases = cases || {}
  return function (switchOn) {
    var args = new Array(arguments.length - 1)
    for (var i = 0; i < args.length; i++) {
      args[i] = arguments[i + 1]
    }
    return (cases[switchOn] || cases.default || noop).apply(null, args)
  }
}
