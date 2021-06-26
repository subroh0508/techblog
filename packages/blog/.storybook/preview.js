import '!style-loader!css-loader!sass-loader!@components/_global.scss';

import { app } from '@storybook/vue3';
import { createRouter, createWebHistory } from 'vue-router';
import { createStore } from 'vuex';

const Home = { template: '<div>Home</div>' };
const Articles = { template: '<div>Articles</div>' };
const Article = { template: '<div>Article</div>' };
const About = { template: '<div>About</div>' };
const NotFound = { template: '<div>NotFound</div>' };

app.use(createRouter(
  {
    history: createWebHistory(),
    routes: [
      { path: '/', name: 'home', component: Home },
      { path: '/articles', name: 'articles', component: Articles },
      { path: '/articles/:title', name: 'article', component: Article },
      { path: '/about', name: 'about', component: About },
      { path: '/:catchAll(.*)', component: NotFound },
    ]
  }
));
app.use(createStore({
  state: () => ({}),
  actions: {
    async fetchArticle({ commit }, title) {
      commit('setArticle', title);
    },
  },
  mutations: {
    setArticle(state, title) {
      console.log(title);
    },
  },
}));
