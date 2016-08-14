const html = require('choo/html')

const header = require('../components/header')
const list = require('../components/results/list')

module.exports = (state, prev, send) => {
  return html `
    <div>
      ${header(state, send)}
      ${list(state)}
    </div>
  `
}
