const { merge } = require('webpack-merge');
const commonConfig = require('./webpack.common');
const path = require("path");
const webpack = require("webpack");

const prodConfig = {
  mode: "production",
  output: {
    path: path.resolve(__dirname, "../", "build"),
    filename: "bundle.js",
  },
  plugins: [
    new webpack.DefinePlugin({
      __isBrowser__: "true",
    }),
  ],
}

module.exports = merge(commonConfig, prodConfig);