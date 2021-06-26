import ArticlesTemplateComponent from '@components/templates/ArticlesTemplate';

const articles = Array.from(Array(20), (_, i) => ({
  title: `title${i + 1}`,
  displayTitle: `記事タイトル${i + 1}`,
  description: '記事内容の要約文章が入ります。大体2行くらいで収まる長さだとちょうどよし。',
  publishedAt: new Date(2020, 1, i + 1),
  tags: ['Android', 'Kotlin', '怪文書'],
})).sort((a, b) => b.publishedAt.getTime() - a.publishedAt.getTime());

export default {
  title: 'Components/templates/ArticlesTemplate',
  component: ArticlesTemplateComponent,
  argTypes: {
    default: {
      defaultValue: '全ての記事',
      control: { type: 'text' },
    },
    articles: {
      defaultValue: '20 articles',
      options: ['20 articles', 'no articles'],
      mapping: {
        '20 articles': articles,
        'no articles': [],
      },
      control: { type: 'radio' },
    },
    limit: {
      defaultValue: 10,
      control: { type: 'number' },
    },
    pagination: {
      defaultValue: true,
      control: { type: 'boolean' },
    },
  },
}

export const ArticlesTemplate = (args) => ({
  components: { ArticlesTemplateComponent },
  setup() {
    return { args };
  },
  template: `
    <articles-template-component v-bind="args">
      {{ args.default }}
    </articles-template-component>
  `,
});
ArticlesTemplate.storyName = 'ArticlesTemplate';
