import NotFoundPage from '@components/pages/global/NotFound';

export default {
  title: 'Pages/NotFound',
  component: NotFoundPage,
}

export const NotFound = (args) => ({
  components: { NotFoundPage },
  setup() {
    return { args };
  },
  template: '<not-found-page v-bind="args"/>',
});
NotFound.storyName = 'NotFound';
