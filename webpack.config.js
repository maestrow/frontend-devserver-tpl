const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    page1: './src/index.pug',
    page2: './src/index2.pug'
  },
  output: {
    filename: '[name].js',
    publicPath: '/'
  },
  module: {
    rules: [
      { test: /\.css$/, use: ['style-loader', 'css-loader'] },
      { test: /\.pug$/, use: [
        "file-loader?name=[name].html",
        //"extract-loader",
        //"html-loader",
        "pug-html-loader"
      ] },
      { test: /\.png$/, use: ['file-loader'] },
    ]
  },
  plugins: [
    new CleanWebpackPlugin(['dist/*']),
    // new HtmlWebpackPlugin({
    //   filename: 'file1.html',
    //   template: './src/index.pug'
    // }),
    // new HtmlWebpackPlugin({
    //   filename: 'file2.html',
    //   template: './src/index2.pug'
    // }),
  ]
};