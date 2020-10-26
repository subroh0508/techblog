import { createStore as createVuexStore } from 'vuex';

import { findFullArticle } from '@components/finder';

export const createStore = () => {
  return createVuexStore({
    state: () => ({
      article: {},
    }),
    actions: {
      async fetchArticle({ commit }, title) {
        commit('setArticle', await findFullArticle(title));
      },
    },
    mutations: {
      setArticle(state, article) {
        state.article = article;
      },
    },
  });
};
