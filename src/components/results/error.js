const html = require('choo/html')

module.exports = (msg) => {
  return html `
    <article class="message is-danger">
      <div class="message-body">
        ${msg} <i class="fa fa-meh-o"></i>
      </div>
    </article>
  `
}
