# webpack 从零开始
本文所有内容遵照webpack@5.4.0 官方文档编写，针对有一定编程基础，了解webpack 却不熟悉配置流程的同学。我会尽可能的贴近实际应用场景来编写本文的内容，基础知识如果不熟悉的话建议查看[webpack 官方文档](https://www.webpackjs.com/guides/)
首先需要在安装、配置node 环境，建议安装 cnpm i（淘宝镜像）提升安装依赖包速度，顺带在这里说几个npm install 命令参数的基本知识点

```
npm 安装依赖包
npm install = npm i

发布用到的依赖
npm i --save = npm i -S

开发用到的依赖
npm i --save-dev = npm i -D# webpackLearning# webpack-learning
```
