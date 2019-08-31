import Vue from 'vue';
import VueRouter from 'vue-router';

import HomeView from './components/pages/home/Home';
import AboutView from './components/pages/about/About';

Vue.use(VueRouter);

export default new VueRouter({
  mode: 'history',
  routes: [
    { path: '/', name: 'home', component: HomeView },
    { path: '/about', name: 'about', component: AboutView },
  ],
});
