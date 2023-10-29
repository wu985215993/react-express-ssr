const path = require('path')
const nodeExternals = require('webpack-node-externals')
const { merge } = require('webpack-merge')
const baseConfig = require('./webpack.base')

const serverConfig = {
  // node 环境不需要source-map
  devtool: false,
  entry: './src/server',
  output: {
    filename: "server.js",
    path: path.resolve(__dirname, './dist'),
  },
  target: 'node',
  externals: [nodeExternals()],
}

module.exports = merge(baseConfig, serverConfig)