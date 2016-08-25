const choo = require('choo')

require('../static/theme/index.scss')

// Init app
const app = choo()

// Plugins
if (process.env.NODE_ENV !== 'production') {
  const log = require('choo-log')
  app.use(log())
}

// Init models
const models = require('./models/index')
models.map(model => app.model(model))

// Init router
app.router(require('./router'))

// Render app to body
document.body.appendChild(app.start())
