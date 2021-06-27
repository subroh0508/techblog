import AboutPage from '@components/pages/about/About';

export default {
  title: 'Pages/About',
  component: AboutPage,
}

export const About = (args) => ({
  components: { AboutPage },
  setup() {
    return { args };
  },
  template: '<about-page v-bind="args"/>',
});
