const { merge } = require('webpack-merge');
const commonConfig = require('./webpack.common');
const path = require("path");

const prodConfig = {
  mode: "production",
  output: {
    path: path.resolve(__dirname, "../", "build"),
    filename: "bundle.js",
  },
}

module.exports = merge(commonConfig, prodConfig);