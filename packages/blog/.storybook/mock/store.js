import { createStore } from 'vuex';
import { action } from '@storybook/addon-actions';

import { findFullArticle } from '@components/finder';

const mockStore = createStore({
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

export default mockStore;
