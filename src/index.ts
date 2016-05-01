'use strict'

import stringRender from 'string-render'

export default function stringTrueOneline(rawStr: string): string {
  return stringRender(rawStr)
    .replace(/\n/g, ' ')
    .replace(/\s{2,}/g, ' ')
    .replace(/^\s+/, '')
    .replace(/\s+$/, '')
}

// ES6 Modules default exports interop with CommonJS
module.exports = stringTrueOneline
module.exports.default = stringTrueOneline
