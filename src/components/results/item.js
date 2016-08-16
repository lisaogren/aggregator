const html = require('choo/html')

module.exports = (item) => {
  return html `
    <div class="card is-fullwidth">
      <header class="card-header">
        <p class="card-header-title">
          ${item.name}
        </p>
      </header>
      <div class="card-content">
        <div class="content">
          ${item.description}
        </div>
      </div>
      <footer class="card-footer">
        <a href="${item.html_url}" class="card-footer-item" target="_blank">
          <i class="fa fa-github"></i> View on github
        </a>
        <a href="${item.owner.html_url}" class="card-footer-item" target="_blank">
          <i class="fa fa-user"></i> ${item.owner.login}
        </a>
      </footer>
    </div>
  `
}
