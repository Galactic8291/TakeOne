const path = require('path')
const webpack = require('webpack')
const cssnext = require('postcss-cssnext')
const precss = require('precss')
const sugarss = require('sugarss')

const checkDevel = sources => {
  if (process.env.NODE_ENV !== 'production') {
    sources.push(
      'webpack-dev-server/client?http://localhost:8080',
      'webpack/hot/only-dev-server'
    )
  }

  return sources
}

const config = {
  entry: {
    bundle: checkDevel(['./src/index.js'])
  },
  output: {
    publicPath: '/',
    path: path.join(__dirname, '/dist'),
    filename: 'bundle.js'
  },
  devServer: {
    contentBase: './dist'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.DefinePlugin({
      __DEV__: process.env.NODE_ENV !== 'production',
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
    })
  ],
  module: {
    loaders: [{
      test: /\.js$/,
      loader: 'babel',
      query: {
        'plugins': ['react-hot-loader/babel']
      },
      exclude: /node_modules/
    }, {
      test: /\.css$/,
      loader: 'style!css?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]!postcss-loader'
    }, {
      test: /\.(png|jpg|jpeg|gif|svg)$/,
      loader: 'url-loader?prefix=img/&limit=53248'
    }, {
      test: /\.(woff|woff2|ttf|eot)$/,
      loader: 'url-loader?prefix=font/&limit=53248'
    }]
  },
  postcss: function () {
    return {
      plugins: [cssnext, precss],
      parser: sugarss
    }
  }
}

module.exports = config

