import SiteHeaderComponent from '@components/organisms/SiteHeader';

export default {
  title: 'Components/organisms/SiteHeader',
  component: SiteHeaderComponent,
}

export const SiteHeader = (args) => ({
  components: { SiteHeaderComponent },
  setup() {
    return { args };
  },
  template: '<site-header-component v-bind="args"/>',
});
SiteHeader.storyName = 'SiteHeader';
