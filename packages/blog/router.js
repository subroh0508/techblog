import { createRouter as createVueRouter, createWebHistory, createMemoryHistory } from 'vue-router';

const createRouter = (history) => createVueRouter({
  history,
  routes: [
    { path: '/', name: 'home', component: () => import('./components/pages/home/Home') },
    { path: '/articles', name: 'articles', component: () => import('./components/pages/article/Articles') },
    { path: '/articles/:title', name: 'article', component: () => import('./components/pages/article/Article'), props: true },
    { path: '/about', name: 'about', component: () => import('./components/pages/about/About') },
    { path: '/:catchAll(.*)', component: () => import('./components/pages/global/NotFound') },
  ],
  scrollBehavior (to, from, savedPosition) {
    return { left: 0, top: 0 };
  },
});

export const createClientRouter = () => createRouter(createWebHistory());
export const createSSRRouter = () => createRouter(createMemoryHistory());
