import ArticleHeaderComponent from '@components/molecules/ArticleHeader';

export default {
  title: 'Components/molecules/ArticleHeader',
  component: ArticleHeaderComponent,
  argTypes: {
    'className.displayTitle': {
      defaultValue: 'text',
      options: ['text', 'link'],
      control: { type: 'radio' },
    },
    'className.publishedAt': {
      defaultValue: 'subtitle',
      options: ['subtitle', 'text'],
      control: { type: 'radio' },
    },
    title: {
      defaultValue: 'title',
      control: { type: 'text' },
    },
    displayTitle: {
      defaultValue: '記事タイトル',
      control: { type: 'text' },
    },
    publishedAt: {
      defaultValue: new Date().getTime(),
      control: { type: 'date' },
    },
    tags: {
      defaultValue: ['Android', 'Kotlin', '怪文書'],
      controle: { type: 'array' },
    },
  }
}

export const ArticleHeader = (args) => ({
  components: { ArticleHeaderComponent },
  setup() {
    return {
      args: {
        ...args,
        className: {
          displayTitle: args['className.displayTitle'],
          publishedAt: args['className.publishedAt'],
        },
        publishedAt: new Date(args.publishedAt),
      },
    };
  },
  template: '<article-header-component v-bind="args"/>',
});
ArticleHeader.storyName = 'ArticleHeader';
