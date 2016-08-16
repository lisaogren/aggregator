const _ = require('lodash')

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
      isLoading: false,
      hasError: false,
      errorMsg: null
    }
  },
  reducers: {
    searchInput: (data, state) => ({
      search: { input: data.search }
    }),

    toggleNav: (data, state) => ({
      nav: { isActive: !state.nav.isActive }
    }),

    setLoading: (isLoading, state) => ({
      results: _.extend(state.results, { isLoading })
    }),

    setError: (errorMsg, state) => {
      let data = { hasError: false, errorMsg: null }

      if (errorMsg) {
        data = { hasError: true, errorMsg }
      }

      return { results: _.extend(state.results, data) }
    }
  }
}
