import ArticleHeaderComponent from '@components/molecules/ArticleHeader';

export default {
  title: 'Components/molecules/ArticleHeader',
  component: ArticleHeaderComponent,
}

const Template = (args) => ({
  components: { ArticleHeaderComponent },
  setup() {
    return { args };
  },
  template: '<article-header-component v-bind="args"/>',
});

const article = {
  title: 'title',
  displayTitle: '記事タイトル',
  publishedAt: new Date(),
  tags: ['Android', 'Kotlin', '怪文書'],
};

export const TextArticleHeader = Template.bind({});
TextArticleHeader.args = {
  className: { displayTitle: 'text', publishedAt: 'subtitle' },
  ...article,
};

export const LinkArticleHeader = Template.bind({});
LinkArticleHeader.args = {
  className: { displayTitle: 'link', publishedAt: 'subtitle' },
  ...article,
};
