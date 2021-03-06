
var path = require('path');
var webpack = require('webpack');

var config = {
  context: path.join(__dirname, 'app'),
  entry: [
    './index.js',
    'webpack/hot/dev-server',
    'webpack-dev-server/client?http://localhost:8090/',
  ],
  output: {
    path: path.join(__dirname, 'app'),
    filename: 'bundle.js',
    publicPath: '/',
  },
  module: {
    loaders: [
      {
        test: /.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['es2015']
        }
      },
      {
        test: /\.less$/,
        loader: "style!css!less"
      },
      {
        test: /\.css$/,
        loader: "style!css!less"
      },
      {
        test: /.html$/,
        loader: "html"
      }
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.ProvidePlugin({
        moment: "moment",
        "window.moment": "moment"
    }),
    new webpack.ProvidePlugin({
        tinycolor: "tinycolor2",
        "window.tinycolor": "tinycolor2"
    }),
  ]
};
module.exports = config;