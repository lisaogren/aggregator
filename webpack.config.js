var path = require('path')
var webpack = require('webpack')
var merge = require('webpack-merge')
var HtmlWebpackPlugin = require('html-webpack-plugin')
var autoprefixer = require('autoprefixer')
var ExtractTextPlugin = require('extract-text-webpack-plugin')
var CopyWebpackPlugin = require('copy-webpack-plugin')
var BrowserSyncPlugin = require('browser-sync-webpack-plugin')
var historyApiFallback = require('connect-history-api-fallback')

// detemine build env
var TARGET_ENV = process.env.NODE_ENV || 'development'

// common webpack config
var common = {
  output: {
    path: path.resolve(__dirname, 'dist/'),
    filename: '/[hash].js'
  },
  resolve: {
    modulesDirectories: ['node_modules'],
    extensions: ['', '.js', '.json']
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel',
        query: {
          presets: ['es2040'],
          plugins: ['transform-object-rest-spread']
        }
      },
      { test: /\.json$/, loader: 'json' },
      { test: /\.(ttf|eot|svg|jpg|jpeg|png|gif)(\?[\s\S]+)?$/, loader: 'file' },
      { test: /\.woff2?(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: 'url' },
      { test: require.resolve('jquery'), loader: 'expose?jQuery!expose?$' }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'static/tpl.html',
      inject: 'body',
      filename: 'index.html'
    })
  ],
  postcss: [ autoprefixer({ browsers: ['last 2 versions'] }) ],

  inline: true,
  progress: true
}

// additional webpack settings for local env (when invoked by 'npm start')
var development = {
  entry: [
    // 'webpack-dev-server/client?http://localhost:1337',
    'font-awesome-loader',
    path.join(__dirname, 'static/index.js')
  ],
  // devServer: {
  //   inline: true,
  //   progress: true
  // },
  module: {
    loaders: [
      {
        test: /\.(css|scss)$/,
        loaders: ['style', 'css', 'postcss', 'sass']
      }
    ]
  },
  plugins: [
    new BrowserSyncPlugin({
      host: 'localhost',
      port: 3000,
      logLevel: 'info',
      logConnections: true,
      server: { baseDir: ['static', 'dist'] },
      bsFiles: { src: ['static', 'dist', 'src'] },
      middleware: [require('connect-logger')(), historyApiFallback()]
    }),
    new webpack.HotModuleReplacementPlugin()
  ],

  watch: true,
  keepalive: true,
  failOnError: false
}

var production = {
  entry: [
    'font-awesome-loader',
    path.join(__dirname, 'static/index.js')
  ],
  module: {
    loaders: [
      {
        test: /\.(css|scss)$/,
        loader: ExtractTextPlugin.extract('style-loader', [
          'css', 'postcss', 'sass'
        ])
      }
    ]
  },
  plugins: [
    new CopyWebpackPlugin([
      { from: 'static/img/', to: 'img/' },
      { from: 'static/favicon.ico' },
      { from: 'static/theme/images/', to: 'theme/images/' }
    ]),
    new webpack.optimize.OccurenceOrderPlugin(),
    // extract CSS into a separate file
    new ExtractTextPlugin('./[hash].css', { allChunks: true }),
    // minify & mangle JS/CSS
    new webpack.optimize.UglifyJsPlugin({
      minimize: true,
      compressor: { warnings: false },
      mangle: true
    })
  ],

  watch: false,
  keepalive: false,
  failOnError: true
}

if (TARGET_ENV === 'development') {
  console.log('Booting development server...')
  module.exports = merge(common, development)
} else if (TARGET_ENV === 'production') {
  console.log('Building production /dist folder...')
  module.exports = merge(common, production)
}
