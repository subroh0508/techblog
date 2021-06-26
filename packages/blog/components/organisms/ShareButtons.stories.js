import ShareButtonsComponent from '@components/organisms/ShareButtons';
import { action } from '@storybook/addon-actions';

export default {
  title: 'Components/organisms/ShareButtons',
  component: ShareButtonsComponent,
  argTypes: {
    title: {
      defaultValue: 'title',
      control: { type: 'text' },
    },
    displayTitle: {
      defaultValue: '記事タイトル',
      control: { type: 'text' },
    },
    path: {
      defaultValue: '/articles',
      control: { type: 'text' },
    },
  },
}

export const ShareButtons = (args) => ({
  components: { ShareButtonsComponent },
  setup() {
    window.gtag = action('gtag');
    window.open = action('window.open');
    return { args };
  },
  template: '<share-buttons-component v-bind="args"/>',
});
ShareButtons.storyName = "ShareButtons";
