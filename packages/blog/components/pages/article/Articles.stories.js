import ArticlesPage from '@components/pages/article/Articles';
import mockRouter from '@mock/router';

export default {
  title: 'Pages/Articles',
  component: ArticlesPage,
  argTypes: {
    query: {
      defaultValue: '',
      options: ['', 'Android', 'Kotlin'],
      control: { type: 'radio' },
    },
  },
}

export const Articles = (args) => ({
  components: { ArticlesPage },
  setup() {
    mockRouter.replace(`/articles${args.query.length ? `?tag=${args.query}` : ''}`);
    return { args: {} };
  },
  template: '<articles-page v-bind="args"/>',
});
