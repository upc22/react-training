var webpack = require('webpack');
var path = require('path');

var BUILD_DIR = path.resolve(__dirname, 'dist');
var APP_DIR = path.resolve(__dirname, 'src');

var config = {
  entry: APP_DIR + '/app.js',
  /*output: {
    path: BUILD_DIR,
    filename: 'app.bundle.js'
  },*/

  devtool: 'source-map',


   module : {
    loaders : [
      {
        test : /\.js?/,
        include : APP_DIR,
        loaders: ["babel-loader"]
      }
    ]
  }
};

module.exports = config;


