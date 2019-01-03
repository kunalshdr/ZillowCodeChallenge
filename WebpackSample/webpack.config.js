const path = require('path');
const HtmlWebPackPlugin = require("html-webpack-plugin");
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: ['./src/main.js', './src/main.scss'],

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
      }
    ]
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: "./src/main.html",
      filename: "./index.html"
    }),
    new ExtractTextPlugin({
      filename: 'bundle-[hash].css',
      allChunks: true,
    }),
  ]
};