const path = require('path');
const glob = require('glob');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: () => new Promise((resolve) => 
    resolve(glob.sync('src/*').reduce((acc, value) => {
      acc[value] = './' + value;
      return acc;
    }, {}))
  ),
  output: {
    filename: '[name].js',
    publicPath: '/'
  },
  module: {
    rules: [
      { test: /\.css$/, use: ['style-loader', 'css-loader'] },
      { test: /\.pug$/, use: [
        "file-loader?name=[name].html",
        "extract-loader",
        "html-loader",
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