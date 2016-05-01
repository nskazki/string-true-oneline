'use strict'

import so from '../src/index'
import assert = require('power-assert')
import chalk = require('chalk')

describe('string-true-oneline', () => {
  it('oneline', () => {
    const act = so('\\n hello \\n')
    const exp = '\\n hello \\n'
    assert.equal(act, exp)
  })

  it('empty', () => {
    const act = so('')
    const exp = ''
    assert.equal(act, exp)
  })

  it('\\n only', () => {
    const act = so('\n')
    const exp = ''
    assert.equal(act, exp)
  })

  it('\\n on start', () => {
    const act = so('\n hello')
    const exp = 'hello'
    assert.equal(act, exp)
  })

  it('\\n on end', () => {
    const act = so('hello \n')
    const exp = 'hello'
    assert.equal(act, exp)
  })

  it('\\n on end and start', () => {
    const act = so('\n hello \n')
    const exp = 'hello'
    assert.equal(act, exp)
  })

  it('\\n on end and start with multi spaces', () => {
    const act = so('  \n   hello    \n ')
    const exp = 'hello'
    assert.equal(act, exp)
  })

  it('multi escape sequences and multi spaces', () => {
    const act = so('h\ve\vl\rl\f\bo \nw\no\r\v\r\vr\v\rl\nd !')
    const exp = 'h e l l o w o r l d !'
    assert.equal(act, exp)
  })

  it('simple colored - empty', () => {
    const act = so(chalk.yellow(''))
    const exp = ''
    assert.equal(act, exp)
  })

  it('simple colored - \\n x 1', () => {
    const act = so(chalk.blue('\n'))
    const exp = ''
    assert.equal(act, exp)
  })

  it('medium colored', () => {
    const act = so(chalk.blue('\n') + ' ' + chalk.blue('\n'))
    const exp = ''
    assert.equal(act, exp)
  })

  it('hard colored', () => {
    const act = so(chalk.magenta(chalk.yellow('\n') + 'wow' + chalk.blue('\n hello \n')))
    const exp = 'wow hello'
    assert.equal(act, exp)
  })
})
