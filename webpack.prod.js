const webpack = require('webpack');
const merge = require('webpack-merge');
// 在当前版本下这个插件会报错，暂时搁置，后续处理
TODO: "解决 UglifyJSPlugin 插件报错"
// const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const common = require('./webpack.common.js');

module.exports = merge(common, {
  devtool: "source-map",
  plugins: [
    // new UglifyJSPlugin()
    new webpack.DefinePlugin({
      "process.en.NODE_ENV": JSON.stringify("production")
    })
  ]
});
