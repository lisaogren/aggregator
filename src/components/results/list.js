const html = require('choo/html')

const item = require('./item')
const empty = require('./empty')
const loader = require('../loader')

module.exports = (state, prev, send) => {
  const { items } = state.repositories

  let content
  let { isLoading } = state.ui.results

  if (isLoading) {
    content = loader()
  } else if (items.length) {
    content = items.map(data => item(data))
  } else {
    content = empty()
  }

  return html `
    <section class="section">
      <div class="container results has-text-centered">
        ${content}
      </div>
    </section>
  `
}
