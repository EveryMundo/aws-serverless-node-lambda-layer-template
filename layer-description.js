const path = require('path')

module.exports = function () {
  try {
    return {
      description: Object
        .entries(require(path.join(__dirname, 'nodejs/package.json')).dependencies)
        .map(([k, v]) => `${k}@${v}`).join('\n')
    }
  } catch (e) {
    console.error('DESCRIPTION ERROR:\n', e.message, '\n')

    return { description: '' }
  }
}
