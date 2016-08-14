module.exports = {
  namespace: 'ui',
  state: {
    search: {
      input: ''
    },
    nav: {
      isActive: false
    },
    results: {
      isLoading: false
    }
  },
  reducers: {
    searchInput: (data, state) => ({ search: { input: data.search } }),
    toggleNav: (data, state) => ({ nav: { isActive: !state.nav.isActive } }),
    setLoading: (data, state) => ({ results: { isLoading: data } })
  }
}
