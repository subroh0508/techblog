import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

export const createRouter = () => new VueRouter({
  mode: 'history',
  routes: [
    { path: '/', name: 'home', component: () => import('./components/pages/home/Home') },
    { path: '/articles', name: 'articles', component: () => import('./components/pages/article/Articles') },
    { path: '/articles/:title', name: 'article', component: () => import('./components/pages/article/Article'), props: true },
    { path: '/about', name: 'about', component: () => import('./components/pages/about/About') },
    { path: '/links', name: 'links', component: () => import('./components/pages/links/Links') },
    { path: '*', component: () => import('./components/pages/global/NotFound') },
  ],
  scrollBehavior (to, from, savedPosition) {
    return { x: 0, y: 0 };
  },
});
