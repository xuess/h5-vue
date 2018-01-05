# vue-h5

> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8086
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

# run unit tests
npm run unit

# run e2e tests
npm run e2e

# run all tests
npm test
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).




# 添加自有功能

``` bash

# 安装 sass支持 
npm i node-sass sass-loader --save-dev

# 安装 vuex
npm i vuex --save

# 安装 axios 代替 vue-response
npm i axios --save

# 修改端口号（我的被占用了）
/config/index.js  port: 8086

# 关闭语法验证 个人开发不开了， 以后按需要开启 
/config/index.js -> useEslint: false,

# 手淘rem方案
npm i lib-flexible --save

```

