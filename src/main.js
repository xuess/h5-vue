import Vue from 'vue';
import App from './App';
import router from './router';
import Vuex from 'vuex'
import store from './store'
import * as filters from './util/filter'
// 注册全局 瀑布流
import infiniteScroll from 'vue-infinite-scroll'
Vue.use(infiniteScroll)
//手淘 rem 方案 暂时没用
//import 'lib-flexible'

//注册过滤器
Object.keys(filters).forEach(k => Vue.filter(k, filters[k]))

//轮播 这个体积太大了
import VueAwesomeSwiper from 'vue-awesome-swiper'
Vue.use(VueAwesomeSwiper)

Vue.config.productionTip = false;

Vue.use(Vuex)


new Vue({
  el: '#app',
  store,
  router,
  template: '<App/>',
  components: { App },
});
