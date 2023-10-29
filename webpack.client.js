const path = require('path')
const { merge } = require('webpack-merge')
// 每次打包去除输出目录中不需要的文件
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const baseConfig = require('./webpack.base')
const { MiniCssExtractPlugin } = require('mini-css-extract-plugin')

const clientConfig = {
  // client 环境需要source-map
  devtool: 'source-map',
  entry: './src/client',
  output: {
    path: path.resolve(__dirname, './public'),
    filename: "js/bundle.[hash:5].js"
  },
  plugins: [
    new CleanWebpackPlugin({
      // 清空所有文件排除 favicon.ico
      cleanOnceBeforeBuildPatterns: ['**/*', '!favicon.ico'],
    }),
    // 处理css文件的输出 服务端返回link连接客服端中的样式文件
    new MiniCssExtractPlugin({
      filename: 'css/bundle.[hash:5].css'
    })
  ],
  module: {
    rules: [
      // 处理 css css module
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader']
      }
    ]
  }
}
// 打包客户端的代码 
module.exports = merge(baseConfig, clientConfig)