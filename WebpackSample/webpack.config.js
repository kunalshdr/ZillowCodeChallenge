const path = require('path');
const HtmlWebPackPlugin = require("html-webpack-plugin");
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
  entry: ['./src/main.js', './src/main.scss'],

  plugins: [
    new CleanWebpackPlugin(['dist']),
    new HtmlWebPackPlugin({
      template: "./src/main.html",
      filename: "./index.html"
    }),
    new ExtractTextPlugin({
      filename: 'bundle-[hash].css',
      allChunks: true,
    }),
  ],

  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle-[hash].js'
  },

  module: {
    rules: [{
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: "babel-loader"
      },
      {
        test: /\.(css|sass|scss)$/,
        exclude: /node_modules/,
        use: ExtractTextPlugin.extract({
          use: ['css-loader', 'sass-loader'],
        })
      },
      {
        test: /\.(png|jp(e*)g|gif)$/,
        use: [{
          loader: 'file-loader',
          options: {
            name: '[path][name].[ext]',
            outputPath: 'img/',
            publicPath: 'img/'
          },
        }]
      },
      {
        test: /\.(svg)$/,
        use: [{
          loader: "url-loader",
          options: {
            limit: 1000000,
            name: '[path][name].[ext]',
            outputPath: 'img/',
            publicPath: 'img/'
          }
        }]
      }
    ]
  }
};