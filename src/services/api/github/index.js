const _ = require('lodash')
const http = require('choo/http')
const Promise = require('bluebird')

const config = {
  host: 'https://api.github.com',
  headers: {
    Accept: 'application/vnd.github.v3+json'
  },
  api: {
    search: {
      path: '/search/repositories'
    }
  },
  defaults: {
    sort: 'stars',
    order: 'desc',
    page: 1
  },

  getUrl (api, options) {
    const path = `${this.host}${this.api[api].path}`
    const { query, sort, order, page } = options

    return `${path}?q=${query}&sort=${sort}&order=${order}&page=${page}`
  }
}

module.exports = {
  search (options) {
    console.log('[ api/github ] Sending search request', options)

    options = _.extend({}, config.defaults, options)

    const url = config.getUrl('search', options)

    return new Promise((resolve, reject) => {
      http.get(url, { headers: config.headers }, (err, res, body) => {
        if (err) {
          console.error('[ api/github ] An error occured sending search request', err, res)

          return reject({ err, res })
        }

        body = JSON.parse(body)

        console.log('[ api/github ] Got search result', res, body)

        return resolve({ res, body })
      })
    })
  }
}
