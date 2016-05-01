# string-true-oneline

[![Build Status](https://travis-ci.org/nskazki/string-true-oneline.svg)](https://travis-ci.org/nskazki/string-true-oneline)
[![Coverage Status](https://coveralls.io/repos/github/nskazki/string-true-oneline/badge.svg?branch=master)](https://coveralls.io/github/nskazki/string-true-oneline)

>This module is written on `typescript`, and contains the `.d.ts` file.
><br>If you write on `typescript`: just use it in your project and definitions will be automatically uploaded.

```
npm i -S string-true-oneline
```

## About

This module transforms a string to a oneline string considering escape sequences.

## Warning!

This module does not supported an [ANSI escape codes](http://en.wikipedia.org/wiki/ANSI_escape_code).
And simply removes them before forming line.

```js
const so = require('string-true-oneline')
const inspect = require('util').inspect
const assert = require('assert')
const chalk = require('chalk')

const actColor = so(chalk.blue('\nhello') + ' ' + chalk.blue('world!\n'))
const actClear = so('\nhello world!\n')
const exp = 'hello world!'
assert.equal(actColor, exp)
assert.equal(actClear, exp)
```

## Examples

```js
const so = require('string-true-oneline')
const inspect = require('util').inspect
const assert = require('assert')

var act = so('   \n   hello   world!   \n   ')
var exp = 'hello world!'
assert.equal(act, exp)

var act = so('h\ve\vl\rl\f\bo \nw\no\r\v\r\vr\v\rl\nd !')
var exp = 'h e l l o w o r l d !'
assert.equal(act, exp)
```

## Related

 * [string-render](https://github.com/nskazki/string-render) - base module
 * [murky](https://github.com/nskazki/murky) - like util.format with additional placeholders
