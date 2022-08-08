'use strict';

let path = require('path');

module.exports = {
  mode: 'production',
  entry: './script.js',
  output: {
    filename: 'bundle.js',
    path: __dirname + '/dist'
  },
  watch: true,

  devtool: "source-map",

  module: {}
};
