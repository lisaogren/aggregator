const url = require('url-composer')
const config = require('../config')

module.exports = {
  isCurrent (name) {
    return url.regex(config.routes[name]).test(window.location.pathname)
  }
}
