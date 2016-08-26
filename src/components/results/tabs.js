const html = require('choo/html')

module.exports = () => {
  return html `
    <div class="hero-foot">
      <nav class="tabs is-boxed is-fullwidth">
        <div class="container">
          <ul>
            <li class="is-active">
              <a>
                <span class="icon is-small">
                  <i class="fa fa-github"></i>
                </span>
                <span>Github</span>
              </a>
            </li>
            <li>
              <a>
                <span class="icon is-small">
                  <i class="fa fa-twitter"></i>
                </span>
                <span>Twitter</span>
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  `
}
