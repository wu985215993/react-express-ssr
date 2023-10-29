const path = require('path')
// webpack的统一配置
// 打包客户端的代码 
module.exports = {
  mode: 'development',
  // webpack监听文件改动后重新打包
  watch: true,
  // target: 'node',
  // 配置webpack打包中遇到的模块中的目录部分
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src")
    },
    extensions: ['.js', '.jsx', '.css']
  },
  module: {
    rules: [
      // 处理jsx模块的打 包 通过babel-loader
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: [{
          loader: 'babel-loader',
          /** 排除node_modules 目录 */
          options: {
            presets: ["@babel/preset-react"],
          }
        }],
      }
    ]
  }
}