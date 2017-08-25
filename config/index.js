/**
 * Created by dllo on 17/8/23.
 */
const path = require('path')
module.exports = {
  // 开发环境配置
  dev: {
    env: require('./dev.env'),
    assetsPublicPath: '/',
    assetsSubDirectory: 'static',
    port: 8080,
    autoOpenBrowser: true,
    proxyTable: {
      '/api': {
        target: 'https://muse.huaban.com',
        changeOrigin: true,
        pathRewrite: {
          '/api': ''
        }
      },
      '/api': {
        target: 'http://api.huaban.com',
        changeOrigin: true,
        pathRewrite: {
          '/api': ''
        }
      }
    }
  },
  // 生产环境配置
  build: {
    env: require('./prod.env'),
    assetsRoot: path.resolve(__dirname, '../dist'),
    assetsPublicPath: '',
    assetsSubDirectory: 'static'
  }
}
