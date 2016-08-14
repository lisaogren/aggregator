const html = require('choo/html')

module.exports = (item) => {
  return html `
    <div class="card is-fullwidth">
      <header class="card-header">
        <p class="card-header-title">
          ${item.full_name}
        </p>
      </header>
      <div class="card-content">
        <div class="content">
          ${item.description}
        </div>
      </div>
    </div>
  `
}
