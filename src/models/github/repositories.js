const api = require('../../services/api')

module.exports = {
  namespace: 'repositories',
  state: {
    items: []
  },
  effects: {
    get: (data, state, send, done) => {
      send('ui:setLoading', true, done)

      api.github.search({ query: data.query })
        .then(({ res, body }) => {
          send('ui:setLoading', false, done)
          send('repositories:set', body, done)
        })
        .catch(({ err, res }) => done(err, res))
    }
  },
  reducers: {
    set: (data, state) => ({ items: data.items })
  }
}
