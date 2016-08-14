const html = require('choo/html')

const nav = require('../components/nav')

module.exports = (state, prev, send) => {
  return html `
    <div>
      <section class="hero is-primary">
        <div class="hero-head">
          ${nav(state, send)}
        </div>

        <div class="hero-body">
          <div class="container has-text-centered">
            <h1 class="title">
              About
            </h1>
            <h2 class="subtitle">
              A little story about finding things
            </h2>
          </div>
      </section>
    </div>
  `
}
