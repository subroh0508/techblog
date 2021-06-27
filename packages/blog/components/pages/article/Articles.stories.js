import ArticlesPage from '@components/pages/article/Articles';

export default {
  title: 'Pages/Articles',
  component: ArticlesPage,
}

export const Articles = (args) => ({
  components: { ArticlesPage },
  setup() {
    return { args };
  },
  template: '<articles-page v-bind="args">',
});
