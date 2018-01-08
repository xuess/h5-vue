// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import router from './router';
import Vuex from 'vuex'
import store from './store'
import * as filters from './util/filter'
//手淘 rem 方案
//import 'lib-flexible'

//注册过滤器
Object.keys(filters).forEach(k => Vue.filter(k, filters[k]))

//轮播
import VueAwesomeSwiper from 'vue-awesome-swiper'
Vue.use(VueAwesomeSwiper)

Vue.config.productionTip = false;

Vue.use(Vuex)


/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  template: '<App/>',
  components: { App },
});
