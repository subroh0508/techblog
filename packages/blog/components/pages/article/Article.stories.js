import ArticlePage from '@components/pages/article/Article';

export default {
  title: 'Pages/Article',
  component: ArticlePage,
  argTypes: {
    title: {
      defaultValue: 'sample1',
      options: ['sample1'],
      control: { type: 'radio' },
    }
  }
}

export const Article = (args) => ({
  components: { ArticlePage },
  setup() {
    window.twttr = null;
    return { args };
  },
  template: '<article-page v-bind="args"/>',
})
