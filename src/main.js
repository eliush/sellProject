import Vue from 'vue'
import App from './App.vue'

import VueRouter from 'vue-router'
import Routes from './routes'
import VueLocalStorage from 'vue-localstorage'
import VueResource from 'vue-resource'

Vue.use(VueRouter);
Vue.use(VueLocalStorage);
Vue.use(VueResource);

const router = new VueRouter({
  routes: Routes,
  mode: 'history'
});

new Vue({
  el: '#app',
  render: h => h(App),
  router : router
})
