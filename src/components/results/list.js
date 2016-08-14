const html = require('choo/html')

const item = require('./item')

module.exports = (state, prev, send) => {
  const { items } = state.repositories

  return html `
    <section class="section">
      <div class="container results">
        ${items.map(data => item(data))}
      </div>
    </section>
  `
}
