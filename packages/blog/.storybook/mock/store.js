import { createStore } from 'vuex';
import { action } from '@storybook/addon-actions';

export const handleFetchArticleStore = createStore({
  actions: {
    async fetchArticle(_, title) {
      action('fetchArticle')(title);
    },
  },
});
