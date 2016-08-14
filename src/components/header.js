const html = require('choo/html')

const nav = require('./nav')
const search = require('./search')

module.exports = (state, send) => {
  return html `
    <section class="hero is-primary">
      <div class="hero-head">
        ${nav(state, send)}
      </div>

      <div class="hero-body">
        <div class="container has-text-centered">
          ${search(state, send)}
        </div>
    </section>
  `
}
