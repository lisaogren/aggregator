const merge = require('lodash/merge')
const http = require('choo/http')
const Promise = require('bluebird')
const url = require('url-composer')

const config = {
  host: 'https://api.github.com',
  headers: {
    Accept: 'application/vnd.github.v3+json'
  },
  api: {
    search: {
      // type === repositories|code|users|issues
      path: '/search/:type',
      query: {
        q: null,
        sort: 'stars',
        order: 'desc',
        page: 1
      }
    }
  },

  get (name, options) {
    return merge({ host: this.host }, this.api[name], options)
  }
}

module.exports = {
  search (options) {
    console.log('[ api/github ] Sending search request', options)

    const apiURL = url.build(
      config.get('search', {
        params: { type: 'repositories' },
        query: options
      })
    )

    console.log('[ api/github ] Built API url:', apiURL)

    return new Promise((resolve, reject) => {
      http.get(apiURL, { headers: config.headers }, (err, res, body) => {
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
