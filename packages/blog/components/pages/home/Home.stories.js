import HomePage from '@components/pages/home/Home';
import SiteHeader from '@components/organisms/SiteHeader';
import SiteFooter from '@components/organisms/SiteFooter';

export default {
  title: 'Pages/Home',
  component: HomePage,
}

export const Home = (args) => ({
  components: { HomePage, SiteHeader, SiteFooter },
  setup() {
    return { args };
  },
  template: `
    <div>
      <site-header/>
      <home-page v-bind="args"/>
      <site-footer/>
    </div>
    `,
});
