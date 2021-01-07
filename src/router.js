import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import Material from './views/Material.vue';

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [{
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/material',
    name: 'Material',
    component: Material
  },
]
})