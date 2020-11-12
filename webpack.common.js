const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
// 注意，这里有个坑，引入方式和官方文档不一致，官方文档提供的方式打包将会报错
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
  // 入口文件路径
  entry: {
    app: "./src/index.js",
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
  // 插件
  plugins: [
    // 注意，这里和官方文档不一致，调用这个插件可以不用传参数，否则也会报错
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      // html titil
      title: "Output Management",
      // html 路径
      template: "src/index.html",
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
