const api = require('../../services/api')

module.exports = {
  namespace: 'repositories',
  state: {
    items: []
  },
  effects: {
    get: (data, state, send, done) => {
      api.github.search({ query: data.query })
        .then(({ res, body }) => {
          send('repositories:set', body, done)
          send('ui:setLoading', false)
        })
        .catch(({ err, res }) => done(err, res))
    }
  },
  reducers: {
    set: (data, state) => ({ items: data.items })
  }
}
