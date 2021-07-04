import ArticlePage from '@components/pages/article/Article';
import SiteHeader from '@components/organisms/SiteHeader';
import SiteFooter from '@components/organisms/SiteFooter';

import { app } from '@storybook/vue3';
import { createStore } from 'vuex';
import { action } from '@storybook/addon-actions';

import { findFullArticle } from '@components/finder';

const store = createStore({
  state: () => ({
    article: {},
  }),
  actions: {
    async fetchArticle({ commit }, title) {
      try {
        commit('setArticle', await findFullArticle(title));
      } catch(e) {
        console.log(e);
      } finally {
        action('fetchArticle')(title);
      }
    },
  },
  mutations: {
    setArticle(state, article) {
      state.article = article;
    },
  },
});

app.use(store);

export default {
  title: 'Pages/Article',
  component: ArticlePage,
}

const Template = (args) => ({
  components: { ArticlePage, SiteHeader, SiteFooter },
  setup() {
    store.commit('setArticle', {});
    window.twttr = null;
    return { args };
  },
  template: `
    <div>
      <site-header/>
      <article-page v-bind="args"/>
      <site-footer/>
    </div>
    `,
});

export const ArticleExists = Template.bind({});
ArticleExists.args = {
  title: 'sample1',
};

export const ArticleDoesNotExist = Template.bind({});
ArticleDoesNotExist.args = {
  title: 'not_found',
};
