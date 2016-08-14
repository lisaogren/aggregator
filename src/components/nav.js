const html = require('choo/html')

module.exports = () => {
  return html `
    <header class="nav">
      <div class="container">
        <div class="nav-left">
          <a href="/" class="nav-item is-brand title">
            Aggregator
          </a>
        </div>
        <span class="nav-toggle">
          <span></span>
          <span></span>
          <span></span>
        </span>
        <div class="nav-right nav-menu">
          <a href="/" class="nav-item is-active">
            Home
          </a>
          <a href="/about" class="nav-item">
            About
          </a>
          <span class="nav-item">
            <a class="button is-primary is-inverted">
              <span class="icon">
                <i class="fa fa-github"></i>
              </span>
              <span>Fork on github</span>
            </a>
          </span>
        </div>
      </div>
    </header>
  `
}
