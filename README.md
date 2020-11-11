* [webpack从零开始 -01](https://juejin.im/post/6893875335042564109/)
* [webpack从零开始 -02](https://juejin.im/post/6893536527469510664)
* [webpack从零开始 -03](https://juejin.im/post/6893536752812687367)
* [webpack从零开始 -04](https://juejin.im/post/6893891672145395726)

本文代码github地址：[戳我](https://github.com/ww028/webpack-learning/tree/dev-5.0)

# 启用HMR (模块热替换 Hot Module Replacement 或 HMR)
修改webpack.congig.js
```
...
const webpack = require('webpack');
...
module.exports = {
  devServer: {
    contentBase: "./dist",
    hot: true,
  },
  plugins: [
    ...
    new webpack.HotModuleReplacementPlugin(),
  ],
}
```
官方文档上的new webpack.NamedModulesPlugin() 已经被弃用了，所以就不要管他了

# HMR 修改样式表
我们已经安装了样式表相关的loader，所以现在直接配置就可以用了
修改webpack.config.js
```
...
module.exports = {
  ...
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
  ...
}
...
```
然后再添加一个样式表在index.js 内引入样式表，```npm start``` 启动项目后，更换、添加样式表，就可以实现模块热替换了。