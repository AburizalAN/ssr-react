const { merge } = require('webpack-merge');
const commonConfig = require('./webpack.common');
const path = require("path");
const webpack = require("webpack");

const prodConfig = {
  entry: './src/index.js',
  mode: "production",
  output: {
    path: path.resolve(__dirname, "../", "build"),
    filename: "bundle.js",
  },
}

module.exports = merge(commonConfig, prodConfig);