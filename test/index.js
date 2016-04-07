/**
 * Imports
 */

var Switch = require('..')
var test = require('tape')

/**
 * Tests
 */

test('should switch', function (t) {
  Switch({
    1: _ => t.ok(true),
    2: _ => t.throw(),
    default: _ => t.throw()
  })(1)
  t.end()
})

test('should hit default on miss', function (t) {
  Switch({
    1: _ => t.throw(),
    2: _ => t.throw(),
    default: _ => t.ok(true)
  })(3)
  t.end()
})

test('should pass args', function (t) {
  Switch({
    1: arg => t.equal(arg, 'foo'),
    2: _ => t.throw(),
    default: _ => t.throw()
  })(1, 'foo')
  t.end()
})

test('should pass all args to default', function (t) {
  Switch({
    1: _ => t.throw(),
    2: _ => t.throw(),
    default: arg => t.equal(arg, 3)
  })(3, 'foo')
  t.end()
})
