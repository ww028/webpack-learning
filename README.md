- [webpack 从零开始 -01](https://juejin.im/post/6893875335042564109/)
- [webpack 从零开始 -02](https://juejin.im/post/6893536527469510664)
- [webpack 从零开始 -03](https://juejin.im/post/6893536752812687367)
- [webpack 从零开始 -04](https://juejin.im/post/6893891672145395726)
- [webpack 从零开始 -05](https://juejin.im/post/6893899534360018958)
- [webpack 从零开始 -06](https://juejin.im/post/6894236054660841479)
- [webpack 从零开始 -07 -生产环境构建](https://juejin.im/post/6894261112591089677)

本文代码 github 地址：[戳我](https://github.com/ww028/webpack-learning/tree/dev-8.0)

# 代码分离
官网这样说：“代码分离是 webpack 中最引人注目的特性之一。此特性能够把代码分离到不同的 bundle 中，然后可以按需加载或并行加载这些文件。代码分离可以用于获取更小的 bundle，以及控制资源加载优先级，如果使用合理，会极大影响加载时间。”
总结起来就是一个字：“好”

## 入口起点
这个方法因为会重复引用模块，实际应用场景当中几乎不用，就不举例了，看下面两个方法吧。

## 防止重复
CommonsChunkPlugin