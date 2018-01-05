import Vue from 'vue';
import Router from 'vue-router';
import Detail from '@/pages/detail/Detail';
import Index from '@/pages/index/Index';

Vue.use(Router);

export default new Router({
//	mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index,
    },
    {
      path: '/index',
      name: 'Index1',
      component: Index,
    },
    {
      path: '/detail',
      name: 'Detail',
      component: Detail,
    },
  ],
});
