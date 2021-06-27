import AboutPage from '@components/pages/about/About';
import SiteHeader from '@components/organisms/SiteHeader';
import SiteFooter from '@components/organisms/SiteFooter';

export default {
  title: 'Pages/About',
  component: AboutPage,
}

export const About = (args) => ({
  components: { AboutPage, SiteHeader, SiteFooter },
  setup() {
    return { args };
  },
  template: `
    <div>
      <site-header/>
      <about-page v-bind="args"/>
      <site-footer/>
    </div>
    `,
});
