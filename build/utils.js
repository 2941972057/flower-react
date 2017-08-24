/**
 * Created by dllo on 17/8/23.
 */
const config = require('../config')
const path = require('path')
const glob = require('glob')
exports.assetsPath = function (_path) {
  var assetsSubDirectory = process.env.NODE_ENV === 'production'
        ? config.build.assetsSubDirectory
        : config.dev.assetsSubDirectory
  return path.posix.join(assetsSubDirectory, _path)
}
exports.getEntries = function (globPath) {
  let entries = {}
  glob.sync(globPath).forEach(function (file) {
    let filePathArray = file.split('/').splice(-3)
    const moduleName = filePathArray[1]
    entries[moduleName] = file
  })
  return entries
}
