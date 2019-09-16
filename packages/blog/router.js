import Vue from 'vue';
import VueRouter from 'vue-router';

import Home from './components/pages/home/Home';
import Articles from './components/pages/article/Articles';
import Article from './components/pages/article/Article';
import About from './components/pages/about/About';
import Links from './components/pages/links/Links';
import NotFound from './components/pages/global/NotFound';

Vue.use(VueRouter);

export default new VueRouter({
  mode: 'history',
  routes: [
    { path: '/', name: 'home', component: Home },
    { path: '/articles', name: 'articles', component: Articles },
    { path: '/articles/:title', name: 'article', component: Article, props: true },
    { path: '/about', name: 'about', component: About },
    { path: '/links', name: 'links', component: Links },
    { path: '*', component: NotFound },
  ],
});
