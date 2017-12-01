var webpack = require('webpack');
var path = require('path');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

var BUILD_DIR = path.resolve(__dirname, 'client/dist');
var APP_DIR = path.resolve(__dirname, 'client/src');

var config = {
  entry: APP_DIR + '/index.js',
  output: {
    path: BUILD_DIR,
    filename: 'bundle.js'
  },
  module : {
    loaders : [
      {
        test : /\.jsx?/,
        include : APP_DIR,
        loader : 'babel-loader'
      }
    ]
  },
  plugins: [
    new UglifyJsPlugin({
      sourceMap: true
    })
  ]
};

module.exports = config;
