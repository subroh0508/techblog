import ArticlesTemplateComponent from '@components/templates/ArticlesTemplate';
import articles from '@assets/list';

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
