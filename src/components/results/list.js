const html = require('choo/html')

const item = require('./item')
const empty = require('./empty')
const loader = require('../loader')

module.exports = (state, prev, send) => {
  const { items } = state.repositories

  let content

  if (items.length) {
    content = items.map(data => item(data))
  } else if (state.ui.results.isLoading) {
    content = loader()
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
