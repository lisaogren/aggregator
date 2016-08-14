const html = require('choo/html')

module.exports = () => {
  return html `
    <article class="message is-info">
      <div class="message-body">
        No search results for now <i class="fa fa-smile-o"></i>
      </div>
    </article>
  `
}
