'use strict'

const path = require('path')
  , loaders = require('./config/loaders')

module.exports = {
  entry: path.resolve(__dirname, '..', 'src', 'index.tsx'),

  output: {
    path: path.resolve(__dirname, '..', 'public'),
    filename: 'bundle.js',
  },

  resolve: {
    extensions: [ '.tsx', '.ts', '.js', 'json' ],
  },

  module: {
    rules: [
      ...loaders,
    ]
  },
}
