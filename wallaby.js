module.exports = function () {
  return {
    files: [
      'src/**/*.ts'
    ],
    tests: [
      'test/**/*.ts'
    ],
    env: {
      type: 'node',
      params: {
        env: 'FORCE_COLOR=true'
      }
    }
  }
}
