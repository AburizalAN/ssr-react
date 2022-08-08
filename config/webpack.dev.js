const { merge } = require('webpack-merge');
const commonConfig = require('./webpack.common');
const path = require("path");

const devConfig = {
  mode: "development",
  devServer: {
    historyApiFallback: true,
    port: 3001,
    open: true,
    hot: true,
    liveReload: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html',
    })
  ],
}

module.exports = merge(commonConfig, devConfig);