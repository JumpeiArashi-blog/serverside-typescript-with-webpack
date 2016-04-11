'use strict';

const path = require('path');

module.exports = {
  target: 'node',
  externals: /^(?!^\.\/)/,
  context: path.join(__dirname, 'src'),
  entry: 'index.js',
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'index.js'
  },
  resolve: {
    extensions: ['', '.js']
  }
};