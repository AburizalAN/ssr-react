const { merge } = require('webpack-merge');
const commonConfig = require('./webpack.common');
const path = require("path");

const devConfig = {
  mode: "development",
  devServer: {
    historyApiFallback: true,
    port: 3000,
    open: true,
    hot: true,
    liveReload: true,
  }
}

module.exports = merge(commonConfig, devConfig);