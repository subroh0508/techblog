import ArticleHeaderComponent from '@components/molecules/ArticleHeader';
import moment from 'moment-timezone';

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
      defaultValue: moment('2020-01-01').toDate(),
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
        publishedAt: (typeof args.publishedAt === 'number') ? new Date(args.publishedAt) : args.publishedAt,
      },
    };
  },
  template: '<article-header-component v-bind="args"/>',
});
ArticleHeader.storyName = 'ArticleHeader';
