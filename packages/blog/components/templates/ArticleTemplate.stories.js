import ArticleTemplateComponent from '@components/templates/ArticleTemplate';

import sampleArticle from '@assets/articles/sample1';

export default {
  title: 'Components/templates/Article',
  component: ArticleTemplateComponent,
}

const Template = (args) => ({
  components: { ArticleTemplateComponent },
  setup() {
    return { args };
  },
  template: `<article-template-component v-bind="args"/>`,
});

export const Sample1 = Template.bind({});
Sample1.args = {
  article: {
    ...sampleArticle,
    publishedAt: new Date(sampleArticle.publishedAt),
    updatedAt: new Date(sampleArticle.updatedAt),
  },
};
