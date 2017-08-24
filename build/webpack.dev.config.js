/**
 * Created by dllo on 17/8/23.
 */
const merge = require('webpack-merge')
const webpack = require('webpack')
const config = require('../config')
const utils = require('./utils')
const baseWebpackConfig = require('./webpack.base.config')
const HTMLWebpackPlugin = require('html-webpack-plugin')
const FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin')
// 修改 webpack 配置的 entry
Object.keys(baseWebpackConfig.entry).forEach(function (item) {
  baseWebpackConfig.entry[item] = ['whatwg-fetch', './build/dev-client'].concat(baseWebpackConfig.entry[item])
})
// 合并 base 与 dev 的配置
module.exports = merge(baseWebpackConfig, {
    // 在 base 配置基础上 添加插件
  plugins: [
        // webpack 的默认配置
    new webpack.DefinePlugin({
      'process.env': config.dev.env
    }),
        // webpack 的热模块替换插件
    new webpack.HotModuleReplacementPlugin(),
        // webpack 不触发 error 事件插件
    new webpack.NoEmitOnErrorsPlugin(),
    new FriendlyErrorsPlugin()
  ]
})

const htmlPaths = utils.getEntries('./src/modules/**/*.html')
Object.keys(htmlPaths).forEach(function (key) {
  let config = {
    filename: key + '.html',
    template: htmlPaths[key],
    // 忽略其他模块中的js
    excludeChunks: Object.keys(htmlPaths).filter(function (path) {
      return (path !== key)
    })
  }
  const plugin = new HTMLWebpackPlugin(config)
  module.exports.plugins.push(plugin)
})
