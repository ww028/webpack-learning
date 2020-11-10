第一章基本的配置已经写好了，接下来我们开始处理资源管理
# 加载资源
安装css，sass，scss 的loader
```
cnpm install --save-dev style-loader css-loader node-sass@4.13.1 sass-loader@7.3.1
```
以上命令node-sass 和 sass-loader 带上了版本号，处理sass 不同的版本报错的概率有些大，所以这里就用我测试可以兼容的版本，对实际开发没有影响。

修改webpack.config.js
```
const path = require("path");

module.exports = {
  // 入口文件路径
  entry: "./src/index.js",
  // 输出目录
  output: {
    // 打包文件名
    filename: "bundle.js",
    // 输出文件路径
    path: path.resolve(__dirname, "dist"),
  },
+  module: {
+    rules: [
+      { test: /\.css$/, use: ["style-loader", "css-loader"] },
+      { test: /\.scss$/, use: ["style-loader", "css-loader", "sass-loader"] },
+    ],
+  },
};

```

准备工作完了之后，我们在src 目录下添加assets/style 目录，在style 目录下添加 index.scss 和 style.css。

index.scss
```
*{
  margin: 0;
  padding: 0;
}

```

style.css
```
*{
  color: red;
}
```

在index.js 引入样式表
```
import "./assets/style/style.css"
import "./assets/style/index.scss"
document.write("hello webpack")
```

此时再执行npm run build，两个样式表就都已经打包成功了。
加载图片、字体数据等一样的模式就不多赘述了，跟着[webpack 官方文档](https://www.webpackjs.com/guides/asset-management/#%E5%8A%A0%E8%BD%BD%E5%9B%BE%E7%89%87)走就可以了：