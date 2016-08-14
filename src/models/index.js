const ui = {
  namespace: 'ui',
  state: {
    search: {
      input: ''
    }
  },
  reducers: {
    searchInput: (data, state) => ({ search: { input: data.search } })
  }
}

module.exports = [
  ui,
  require('./github/repositories')
]
