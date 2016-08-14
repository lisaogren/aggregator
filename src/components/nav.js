const html = require('choo/html')

module.exports = (state, send) => {
  const toggleNav = (e) => {
    send('ui:toggleNav')
  }

  const isActive = state.ui.nav.isActive ? 'is-active' : ''

  return html `
    <header class="nav">
      <div class="container">
        <div class="nav-left">
          <a href="/" class="nav-item is-brand title">
            Aggregator
          </a>
        </div>
        <span class="nav-toggle ${isActive}" onclick=${toggleNav}>
          <span></span>
          <span></span>
          <span></span>
        </span>
        <div class="nav-right nav-menu ${isActive}">
          <a href="/" class="nav-item is-active">
            Home
          </a>
          <a href="/about" class="nav-item">
            About
          </a>
          <span class="nav-item">
            <a href="https://github.com/RasCarlito/aggregator" class="button is-primary is-inverted" target="_blank">
              <span class="icon">
                <i class="fa fa-github"></i>
              </span>
              <span>fork on github</span>
            </a>
          </span>
        </div>
      </div>
    </header>
  `
}
