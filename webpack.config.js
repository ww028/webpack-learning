const path = require('path');

module.exports = {
  // 入口文件路径
  entry: './src/index.js',
  // 输出目录
  output: {
    // 打包文件名
    filename: 'bundle.js',
    // 输出文件路径
    path: path.resolve(__dirname, 'dist')
  }
};