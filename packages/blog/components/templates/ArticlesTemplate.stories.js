import ArticlesTemplateComponent from '@components/templates/ArticlesTemplate';
import articles from '@assets/list';

import { app } from '@storybook/vue3';
import { handleFetchArticleStore } from '@mock/store';

app.use(handleFetchArticleStore);

export default {
  title: 'Components/templates/ArticlesTemplate',
  component: ArticlesTemplateComponent,
  argTypes: {
    default: {
      defaultValue: '全ての記事',
      control: { type: 'text' },
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

const Template = (args) => ({
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

export const ManyArticles = Template.bind({});
ManyArticles.args = {
  ...ManyArticles.args,
  articles,
};

export const Empty = Template.bind({});
Empty.args = {
  ...Empty.args,
  articles: [],
}
