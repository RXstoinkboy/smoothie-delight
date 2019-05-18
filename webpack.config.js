const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin')

const env = process.env.NODE_ENV || 'development';
const isDev = env === 'development';
const isProd = env === 'production';

const extractScss = new ExtractTextPlugin({
  filename: 'index.css',
  disable: isDev
});

module.exports = {
  entry: {
    bundle: './src/js/index.js'
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        enforce: 'pre',
        test: /\.js?$/,
        loader: 'eslint-loader',
        exclude: /node_modules/,
        options: {
          fix: true,
        }, 
      },
      {
        test: /\.js$/,
        exclude: /node-modules/,
        use: "babel-loader"
      },
      {
        test: /(\.css|\.scss)$/,
        exclude: /node-modules/,
        use: extractScss.extract({
          use: [
            {loader: 'css-loader'},
            {loader: 'sass-loader'}
          ],
          fallback: 'style-loader'
        })
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './index.html'
    }),
    extractScss
  ]
}