/**
 * Modules
 */

var noop = require('@f/noop')
var slice = require('@f/slice')

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
    var args = new Array(arguments.length)
    for (var i = 0; i < args.length; i++) {
      args[i] = arguments[i]
    }
    return cases[switchOn]
      ? cases[switchOn].apply(null, slice(args, 1))
      : (cases.default || noop).apply(null, args)
  }
}
