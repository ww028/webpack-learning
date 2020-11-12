- [webpack 从零开始 -01](https://juejin.im/post/6893875335042564109/)
- [webpack 从零开始 -02](https://juejin.im/post/6893536527469510664)
- [webpack 从零开始 -03](https://juejin.im/post/6893536752812687367)
- [webpack 从零开始 -04](https://juejin.im/post/6893891672145395726)
- [webpack 从零开始 -05](https://juejin.im/post/6893899534360018958)
- [webpack 从零开始 -06](https://juejin.im/post/6894236054660841479)

本文代码 github 地址：[戳我](https://github.com/ww028/webpack-learning/tree/dev-7.0)

# 生产环境构建

在实际的应用场景当中，开发环境和生产环境的构建目标差异巨大，为了更合理的优化资源，改善加载资源。。反正就是合理，各种好。我们通常会根据不同的环境分别写 webpack 配置。

首先我们先安装`webpack-merge`

```
cnpm install --save-dev webpack-merge
```

然后我们旧的 webpack.config.js 文件没有用了，在根目录新建三个文件，分别是
webpack.common.js

```
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
```

webpack.dev.js

```
const merge = require("webpack-merge");
const common = require("./webpack.common.js");

module.exports = merge(common, {
  devtool: "inline-source-map",
  devServer: {
    contentBase: "./dist",
    hot: true,
  },
});
```

webpack.prod.js

```
const webpack = require('webpack');
const merge = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
  devtool: "source-map",
  plugins: [
    new webpack.DefinePlugin({
      "process.en.NODE_ENV": JSON.stringify("production")
    })
  ]
});
```

文件创建好了之后，我们再修改 package.json

```
"scripts": {
  ...
  "start": "webpack serve --config webpack.dev.js --mode development --env development ",
  "build": "webpack --config webpack.prod.js"
  ...
},
```

修改以上文件之后我们再分别执行```npm run build``` 和 ```npm start```，就可以根据不同的命令来构建了。

# 指定环境
修改webpack.prod.js 
```
const webpack = require("webpack")
...
plugins: [
  new webpack.DefinePlugin({
    "process.en.NODE_ENV": JSON.stringify("production")
  })
]
```

添加完了之后我们可以在index.js 里添加一个判断，来测试一下是否生效了
```
...
if (process.env.NODE_ENV === "production") {
  console.log('this is production')
}
```
此时就可以分别执行```npm run build``` 和 ```npm start``` 命令来看看浏览器控制台打印了什么。

这一篇其实只是把webpack.config.js 的配置分开了而已，新添加的东西其实并不多，这一篇就到这里了。
