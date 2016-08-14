const api = require('../../services/api')

module.exports = {
  namespace: 'repositories',
  state: {
    items: []
  },
  effects: {
    get: (data, state, send, done) => {
      api.github.search({ query: data.query })
        .then(({ res, body }) => send('repositories:add', body, done))
        .catch(({ err, res }) => done(err, res))
    }
  },
  reducers: {
    add: (data, state) => ({ items: data.items })
  }
}
