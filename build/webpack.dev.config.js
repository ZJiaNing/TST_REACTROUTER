const webpack = require("webpack");
const path = require("path");
const merge = require("webpack-merge");
const HtmlWebpackPlugin = require("html-webpack-plugin");

// 导入基本配置
const baseConfig = require("./webpack.base.config.js");

var devConfig = merge(baseConfig, {
    mode: "development",
    plugins: [
        new HtmlWebpackPlugin({
            filename: "index.html",
            template: path.resolve(__dirname, "../src/index.html"),
            inject: true
        })
    ],
    devServer: {
        port: 3000,
        open: true
    }
});

module.exports = devConfig;
