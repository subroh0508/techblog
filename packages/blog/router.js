import Vue from 'vue';
import VueRouter from 'vue-router';

import HomeView from './components/pages/home/Home';
import ArticlesView from './components/pages/article/Articles';
import ArticleView from './components/pages/article/Article';
import AboutView from './components/pages/about/About';
import LinkView from './components/pages/link/Link';

Vue.use(VueRouter);

export default new VueRouter({
  mode: 'history',
  routes: [
    { path: '/', name: 'home', component: HomeView },
    { path: '/articles', name: 'articles', component: ArticlesView },
    { path: '/articles/:title', name: 'article', component: ArticleView },
    { path: '/about', name: 'about', component: AboutView },
    { path: '/link', name: 'link', component: LinkView },
  ],
});
