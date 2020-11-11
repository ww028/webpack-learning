* [webpack从零开始 -01](https://juejin.im/post/6893875335042564109/)
* [webpack从零开始 -02](https://juejin.im/post/6893536527469510664)
* [webpack从零开始 -02](https://juejin.im/post/6893536752812687367)

本文代码github地址：[戳我](https://github.com/ww028/webpack-learning/tree/dev-4.0)

# 使用 source map
当webpack 打包源码的时候，很难定位到错错误的准确位置，而使用source map 可以准确的定位错误的具体位置。
修改webpack.config.js
```
module.exports = {
    ...
    devtool: 'inline-source-map',
    ...
}
```
然后我们可以在index.js 里故意写错一点东西，然后再执行 ```npm run build``` 再看控制台，就可以看到准确的报错位置了。

# 使用webpack-dev-server
每次编译代码都需要执行一次npm run build 在实际开发中很麻烦，webpack-dev-server 为你提供了一个简单的 web 服务器，并且能够实时重新加载(live reloading)。

首先安装
``` 
cnpm install --save-dev webpack-dev-server
```
再修改webpack.config.js
```
module.exports = {
  ...
  devServer: {
    contentBase: "./dist"
  },
  ...
}
```
我们再修改package.json 添加一条命令
```
  ...
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "start": "webpack serve --mode development --env development",
    "build": "webpack"
  },
  ...
```
这里有个坑，按照官方文档的方式直接添加```"start": "webpack-dev-server --open"```,此时执行```npm run build``` 控制台会报错```Error: Cannot find module 'webpack-cli/bin/config-yargs'```, 百度这个问题出来的答案基本都是告诉你去降低webpack 和webpack-cli 的版本，但是去github 上找到了一个解决方案就是如上来配置命令就可以成功执行，解决方法地址：[戳我](https://github.com/webpack/webpack-dev-server/issues/2759#issuecomment-707458759)，但是具体的报错原因还没有找到，github 上有人说是webpack-dev-serve 不支持webpack-cli@4.x,我不确定他说的是否正确，如果哪位同学知道这个问题的原因，还请告知一下，感谢。