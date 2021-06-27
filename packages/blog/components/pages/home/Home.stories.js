import HomePage from '@components/pages/home/Home';

export default {
  title: 'Pages/Home',
  component: HomePage,
}

export const Home = (args) => ({
  components: { HomePage },
  setup() {
    return { args };
  },
  template: '<home-page v-bind="args"/>',
});
