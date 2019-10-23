import Vue from 'vue';
import Vuex from 'vuex';

import { findFullArticle } from '@components/finder';

Vue.use(Vuex);

export const createStore = () => {
  return new Vuex.Store({
    state: () => ({
      article: {},
    }),
    actions: {
      async fetchArticle({ commit }, title) {
        commit('setArticle', await findFullArticle(title))
      }
    },
    mutations: {
      setArticle(state, article) {
        state.article = article;
      }
    },
  });
};
