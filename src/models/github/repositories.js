const api = require('../../services/api')

module.exports = {
  namespace: 'repositories',
  state: {
    items: []
  },
  effects: {
    get: (data, state, send, done) => {
      send('ui:setError', null, done)
      send('ui:setLoading', true, done)

      api.github.search({ q: encodeURIComponent(data.query) })
        .then(({ res, body }) => send('repositories:set', body, done))
        .catch(() => send('ui:setError', 'Got an error sending request', done))
        .finally(() => send('ui:setLoading', false, done))
    }
  },
  reducers: {
    set: (data, state) => ({ items: data.items })
  }
}
