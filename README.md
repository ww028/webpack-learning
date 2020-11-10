# 准备工作
src 目录下只留 index.js，并清空index.js 内容，然后添加一个index.html文件，
此时src 目录下应该就只有index.js 和 index.html

src/index.html （注意，这个是src 目录下的index.html，不是dist 目录下的）
```
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
</head>
<body>
  管理资源输出
</body>
</html>
```

# 动态生成打包后的index.html
安装插件
```
cnpm install --save-dev html-webpack-plugin
```
webpack.config.js
```
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  // 入口文件路径
  entry: {
    app: "./src/index.js",
  },
  // 插件
  plugins: [
    new HtmlWebpackPlugin({
      // html titil
      title: "Output Management",
      // html 路径
      template: "src/index.html"
    }),
  ],
  // 输出目录
  output: {
    // 打包文件名
    filename: "[name].bundle.js",
    // 输出文件路径
    path: path.resolve(__dirname, "dist"),
  },
};

```
我们再一次执行 npm run build  命令，HtmlWebpackPlugin 插件会生成index.html 替换我们之前的index.html。

# 清理dist 文件
每次执行npm 脚本打包时都清空dist 目录，删除过去遗留的文件
安装插件
```
cnpm install clean-webpack-plugin --save-dev
```
webpack.config.js
```
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
// 注意，这里有个坑，引入方式和官方文档不一致，官方文档提供的方式打包将会报错
const {CleanWebpackPlugin} = require('clean-webpack-plugin');

module.exports = {
  // 入口文件路径
  entry: {
    app: "./src/index.js",
  },
  // 插件
  plugins: [
    // 注意，这里和官方文档不一致，调用这个插件可以不用传参数，否则也会报错
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      // html titil
      title: "Output Management",
      // html 路径
      template: "src/index.html"
    }),
  ],
  // 输出目录
  output: {
    // 打包文件名
    filename: "[name].bundle.js",
    // 输出文件路径
    path: path.resolve(__dirname, "dist"),
  },
};
```
此时执行 npm run build 会发现dist 目录旧的文件已经被删除。