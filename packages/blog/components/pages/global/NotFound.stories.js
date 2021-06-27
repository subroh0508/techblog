import NotFoundPage from '@components/pages/global/NotFound';
import SiteHeader from '@components/organisms/SiteHeader';
import SiteFooter from '@components/organisms/SiteFooter';

export default {
  title: 'Pages/NotFound',
  component: NotFoundPage,
}

export const NotFound = (args) => ({
  components: { NotFoundPage, SiteHeader, SiteFooter },
  setup() {
    return { args };
  },
  template: `
    <div>
      <site-header/>
      <not-found-page v-bind="args"/>
      <site-footer/>
    </div>
    `,
});
NotFound.storyName = 'NotFound';
