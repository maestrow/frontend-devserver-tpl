const glob = require('glob');
const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

var resolve = function (local) {
  return path.join(__dirname, local);
}

var htmlWebpackPlugins = glob.sync('src/*.pug')
  .map(value => {
    var name = path.parse(value).name;
    return new HtmlWebpackPlugin({
      template: value,
      chunks: [name],
      filename: name + '.html'
    }
  )});

var entries = glob.sync('./src/*.@(css|sass|scss)').reduce((acc, value) => {
  var name = path.parse(value).name;
  acc[name] = value;
  return acc;
}, {});

console.log('Entries:');
console.log(entries);

module.exports = {
  entry: entries,
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [ 'style-loader', 'css-loader' ]
      },
      {
        test: /\.s(a|c)ss$/,
        use: [ 'style-loader', 'css-loader', 'sass-loader' ]
      },
      {
        test: /\.pug$/,
        use: [ 
          "html-loader",
          "pug-html-loader"
        ]
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(['dist/*']),
  ].concat(htmlWebpackPlugins)
} 