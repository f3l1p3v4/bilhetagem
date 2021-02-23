import Vue from 'vue';
import Router from 'vue-router';
import Home from '../pages/Home.vue';
import Material from '../pages/Material.vue';

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