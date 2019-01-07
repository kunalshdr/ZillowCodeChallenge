const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
    entry: './src/client.js',

    plugins: [
      new CleanWebpackPlugin(['dist'])
    ],

    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: 'bundle.js'
    },

    module: {
      rules: [{
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          use: "babel-loader"
        }
      ]
    }
  };