
# switch

[![Build status][travis-image]][travis-url]
[![Git tag][git-image]][git-url]
[![NPM version][npm-image]][npm-url]
[![Code style][standard-image]][standard-url]

A functional switch statement.

Like [switch](//github.com/ajoslin/switch-fn), but drops the switching arg, and passes subsequent args.

## Installation

    $ npm install @f/switch

## Usage

```js
var Switch = require('@f/switch')

Switch({
  add: add,
  subtract: subtract,
  multiply: multiply,
  default: add
})('add', 1, 1) // => 2

function add (arg1, arg2) {
  return arg1 + arg2
}

```

## API

### switch(cases)

- `cases` - An object with keys as cases and values as the the function to call.

**Returns:** a function that switches on the first arg and calls matched function with subsequent args

## License

MIT

[travis-image]: https://img.shields.io/travis/micro-js/switch.svg?style=flat-square
[travis-url]: https://travis-ci.org/micro-js/switch
[git-image]: https://img.shields.io/github/tag/micro-js/switch.svg?style=flat-square
[git-url]: https://github.com/micro-js/switch
[standard-image]: https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat-square
[standard-url]: https://github.com/feross/standard
[npm-image]: https://img.shields.io/npm/v/@f/switch.svg?style=flat-square
[npm-url]: https://npmjs.org/package/@f/switch
