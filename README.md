# vue-h5

> 一个vue全家桶项目，项目功能是`找券平台`，一个淘客网站，页面有4个，
>
>首页，主题页，商品商品详情页，搜索页
>
>`jsonData` 为测试数据，如果想测试 请放到具体的服务器上，然后开启 `cors` 跨域
>
>推荐使用 chrome 插件 `CORS Toggle`  chrome 商店ID： jioikioepegflmdnbocfhgmpmopmjkim
>
>接口详见 src/fetch/api.js
>
>目前项目接口都是用的是 `http://vueh5.xueshanshan.com/api` 地址
>
>项目在线demo：`http://vueh5.xueshanshan.com`




## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8082
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
/config/index.js  port: 8082

# 关闭语法验证 个人开发不开了， 以后按需要开启 
/config/index.js -> useEslint: false,

# 手淘rem方案 这个暂时未用
npm i lib-flexible --save

# 商品瀑布流组件
npm i vue-infinite-scroll --save

# 轮播组件
npm i vue-awesome-swiper --save

```

