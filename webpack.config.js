const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

var resolve = function (local) {
  return path.join(__dirname, local);
}

module.exports = {
  entry: {
    page1: './src/index.pug',
    page2: './src/index2.pug',
  },
  devServer: {
    hot: true
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [ 'style-loader', 'css-loader' ]
      },
      {
        test: /\.scss$/,
        use: [ 'style-loader', 'css-loader', 'sass-loader' ]
      },
      {
        test: /\.pug$/,
        use: [ 
          "file-loader?name=[path][name].html",
          "extract-loader",
          "html-loader",
          "pug-html-loader"
        ]
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(['dist/*']),
    new HtmlWebpackPlugin()
  ]
} 