/*
* webpack basic configuration
*/

const webpack = require('webpack');
const path = require('path');


module.exports = {
  entry: path.resolve(__dirname, '../src/index.js'),
  output: {
    path: path.resolve(__dirname, '../output'),
    filename: "bundle.[hash:5].js"    // 打包后输出文件的文件名
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        loader: 'babel-loader',
        options: {
          presets: ['babel-preset-env', 'react']
        },
        exclude: /node_modules/
      },
       {
         test: /\.css$/,
         loader: ["style-loader", "css-loader"]
       }
    ]
  },
  plugins: []
}
