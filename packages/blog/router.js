import { defineAsyncComponent } from 'vue';
import { createRouter as createVueRouter, createWebHistory, createMemoryHistory } from 'vue-router';

const createRouter = (history) => createVueRouter({
  history,
  routes: [
    { path: '/', name: 'home', component: defineAsyncComponent(() => import('./components/pages/home/Home')) },
    { path: '/articles', name: 'articles', component: defineAsyncComponent(() => import('./components/pages/article/Articles')) },
    { path: '/articles/:title', name: 'article', component: defineAsyncComponent(() => import('./components/pages/article/Article')), props: true },
    { path: '/about', name: 'about', component: defineAsyncComponent(() => import('./components/pages/about/About')) },
    { path: '/:catchAll(.*)', component: defineAsyncComponent(() => import('./components/pages/global/NotFound')) },
  ],
  scrollBehavior (to, from, savedPosition) {
    return { left: 0, top: 0 };
  },
});

export const createClientRouter = () => createRouter(createWebHistory());
export const createSSRRouter = () => createRouter(createMemoryHistory());
