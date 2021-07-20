var CopyWebpackPlugin = require('copy-webpack-plugin')
const port = 8080 // dev port
// All configuration item explanations can be find in https://cli.vuejs.org/config/
module.exports = {
  publicPath: './',
  lintOnSave: false,
  outputDir: 'dist', // build打包输出目录
  assetsDir: 'assets', // 静态文件输出目录，基于dist
  devServer: {
    port,
    open: true,
    overlay: {
      warnings: false,
      errors: true
    }
    // proxy: {
    //   '/api': {
    //     target: '',
    //     changeOrigin: true,
    //     pathRewrite: {
    //       '^/api': '/api'
    //     }
    //   }
    // }
  },
  // 使用这个插件
  configureWebpack: {
    plugins: [new CopyWebpackPlugin([{ from: './static', to: 'static' }])]
  }
}
