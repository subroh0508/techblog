import SiteFooterComponent from '@components/organisms/SiteFooter';

export default {
  title: 'Components/organisms/SiteFooter',
  component: SiteFooterComponent,
}

export const SiteFooter = (args) => ({
  components: { SiteFooterComponent },
  setup() {
    return { args };
  },
  template: '<site-footer-component v-bind="args"/>',
});
SiteFooter.storyName = 'SiteFooter';
