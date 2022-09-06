const { merge } = require('webpack-merge');
const commonConfig = require('./webpack.common');
const path = require('path')
const nodeExternals = require('webpack-node-externals')
const webpack = require("webpack");

serverConfig = {
  mode: 'development',
  entry: './server/index.js',
  target: 'node',
  externals: [nodeExternals()],
  output: {
    path: path.resolve(__dirname, '../', 'build'),
    filename: 'server.js',
  },
}

module.exports = merge(commonConfig, serverConfig)