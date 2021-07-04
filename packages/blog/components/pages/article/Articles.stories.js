import ArticlesPage from '@components/pages/article/Articles';
import SiteHeader from '@components/organisms/SiteHeader';
import SiteFooter from '@components/organisms/SiteFooter';
import mockRouter from '@mock/router';

import { app } from '@storybook/vue3';
import { handleFetchArticleStore } from '@mock/store';

app.use(handleFetchArticleStore);

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
  components: { ArticlesPage, SiteHeader, SiteFooter },
  setup() {
    mockRouter.replace(`/articles${args.query.length ? `?tag=${args.query}` : ''}`);
    return { args: {} };
  },
  template: `
    <div>
      <site-header/>
      <articles-page v-bind="args"/>
      <site-footer/>
    </div>
    `,
});
