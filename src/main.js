// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import VueRouter from 'vue-router';
import VueResource from 'vue-resource';
import App from './App';
import goods from './components/goods/goods.vue';

Vue.config.productionTip = false;

Vue.use(VueRouter);
Vue.use(VueResource);

/**
 * Vue 1.0 内容，2.0已经不再支持
    router.map({
      '/goods': {
        component: goods
    }
    });
    router.start(app, '#app');
 */

const routes = [
  {path: '/goods', component: goods}
];

const router = new VueRouter({
  routes: routes
});

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => (App)
});

