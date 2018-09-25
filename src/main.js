import Vue from 'vue'
import App from './App.vue'

import VueRouter from 'vue-router'
import Routes from './routes'
import VueLocalStorage from 'vue-localstorage'

Vue.use(VueRouter);
Vue.use(VueLocalStorage);

const router = new VueRouter({
  routes: Routes,
  mode: 'history'
});

new Vue({
  el: '#app',
  render: h => h(App),
  router : router
})
