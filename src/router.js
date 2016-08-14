module.exports = (route) => [
  route('/', require('./views/main')),
  route('/about', require('./views/about'))
]
