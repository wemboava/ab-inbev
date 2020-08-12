'use strict'

const { merge } = require('webpack-merge')
const UglifyJSPlugin = require('uglifyjs-webpack-plugin')
const common = require('./webpack.common.js')

const prodConfig = {
  mode: 'production',
  plugins: [
    new UglifyJSPlugin()
  ]
}

module.exports = merge(common, prodConfig)
