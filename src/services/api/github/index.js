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
      // type === repositories|code|...
      // path: '/search/:type',
      path: '/search/repositories',
      params: {
        q: null,
        sort: 'stars',
        order: 'desc',
        page: 1
      }
    }
  }
}

const request = {
  build (options) {
    return `${this.path(options)}${this.params(options)}`
  },

  path (options) {
    return `${config.host}${config.api[options.name].path}`
  },

  params (options) {
    const definition = config.api[options.name]
    const params = _.map(
      _.extend({}, definition.params, options.params),
      (param, key) => `${key}=${param}`
    ).join('&')

    return params ? `?${params}` : ''
  }
}

module.exports = {
  search (options) {
    console.log('[ api/github ] Sending search request', options)

    const url = request.build({ name: 'search', params: options })

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
