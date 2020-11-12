* [webpack从零开始 -01](https://juejin.im/post/6893875335042564109/)
* [webpack从零开始 -02](https://juejin.im/post/6893536527469510664)
* [webpack从零开始 -03](https://juejin.im/post/6893536752812687367)
* [webpack从零开始 -04](https://juejin.im/post/6893891672145395726)
* [webpack从零开始 -05](https://juejin.im/post/6893899534360018958)

本文代码github地址：[戳我](https://github.com/ww028/webpack-learning/tree/dev-6.0)

# tree shaking
官方文档这样子说：
"tree shaking 是一个术语，通常用于描述移除 JavaScript 上下文中的未引用代码(dead-code)
通过 package.json 的 "sideEffects" 属性作为标记，向 compiler 提供提示，表明项目中的哪些文件是 "pure(纯的 ES2015 模块)"，由此可以安全地删除文件中未使用的部分。"

其实说白了就是一个可以减小打包文件体积的配置，并且引入却未使用的代码会降低亮度。比如我在配置前 /dist/app.bundle.js 的文件大小是106kb，配置后是71.4kb，看起来之后30多kb 的差距，但是这也减少了30% 的大小。

启用这个配置很简单。
package.json
```
{
  name: "项目名称",
  "sideEffects": false,
  ...
}
```
设置完之后再设置 mode 切换到压缩输出
webpack.config.js
```
module.exports = {
  ...
  mode: "production"
  ...
}
```
再执行 ```npm run build``` 就可以了
