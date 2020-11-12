* [webpack从零开始 -01](https://juejin.im/post/6893875335042564109/)
* [webpack从零开始 -02](https://juejin.im/post/6893536527469510664)
* [webpack从零开始 -03](https://juejin.im/post/6893536752812687367)
* [webpack从零开始 -04](https://juejin.im/post/6893891672145395726)
* [webpack从零开始 -05](https://juejin.im/post/6893899534360018958)
* [webpack从零开始 -06](https://juejin.im/post/6894236054660841479)

本文代码github地址：[戳我](https://github.com/ww028/webpack-learning/tree/dev-7.0)

# 生产环境构建
在实际的应用场景当中，开发环境和生产环境的构建目标差异巨大，为了更合理的优化资源，改善加载资源。。反正就是合理，各种好。我们通常会根据不同的环境分别写webpack 配置。

首先我们先安装```webpack-merge```
```
cnpm install --save-dev webpack-merge
```

然后我们旧的webpack.config.js 文件没有用了，在根目录新建三个文件，分别是
webpack.common.js
```

```
