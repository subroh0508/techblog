import ArticlePage from '@components/pages/article/Article';
import SiteHeader from '@components/organisms/SiteHeader';
import SiteFooter from '@components/organisms/SiteFooter';

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
  components: { ArticlePage, SiteHeader, SiteFooter },
  setup() {
    window.twttr = null;
    return { args };
  },
  template: `
    <div>
      <site-header/>
      <article-page v-bind="args"/>
      <site-footer/>
    </div>
    `,
})
