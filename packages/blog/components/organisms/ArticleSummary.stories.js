import ArticleSummaryComponent from '@components/organisms/ArticleSummary';

import { app } from '@storybook/vue3';
import { handleFetchArticleStore } from '@mock/store';

app.use(handleFetchArticleStore);

export default {
  title: 'Components/organisms/ArticleSummary',
  component: ArticleSummaryComponent,
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
    description: {
      defaultValue: '記事内容の要約文章が入ります。大体2行くらいで収まる長さだとちょうどよし。',
      control: { type: 'text' },
    },
    publishedAt: {
      defaultValue: new Date(Date.parse('2020-01-01')),
      control: { type: 'date' },
    },
    tags: {
      defaultValue: ['Android', 'Kotlin', '怪文書'],
      controle: { type: 'array' },
    },
  },
}

export const ArticleSummary = (args) => ({
  components: { ArticleSummaryComponent },
  setup() {
    return { 
      args: {
        article: {
          ...args,
          className: {
            displayTitle: args['className.displayTitle'],
            publishedAt: args['className.publishedAt'],
          },
          publishedAt: (typeof args.publishedAt === 'number') ? new Date(args.publishedAt) : args.publishedAt,
        },
      },
    }
  },
  template: '<article-summary-component v-bind="args"/>'
})
ArticleSummary.storyName = 'ArticleSummary';
