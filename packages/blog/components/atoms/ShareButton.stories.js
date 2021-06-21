import ShareButtonComponent from '@components/atoms/ShareButton';
import TwitterIcon from '@components/atoms/icons/Twitter';
import FacebookIcon from '@components/atoms/icons/Facebook';
import HatenaIcon from '@components/atoms/icons/Hatena';
import PocketIcon from '@components/atoms/icons/Pocket';

export default {
  title: 'Components/atoms/ShareButton',
  component: ShareButtonComponent,
  argTypes: {
    default: {
      defaultValue: 'Twitter',
      options: ['Twitter', 'Facebook', 'Hatena', 'Pocket'],
      control: { type: 'radio' }
    }, 
    onClick: { action: 'clicked' },
  }
}

export const ShareButton = (args) => ({
  components: { ShareButtonComponent, TwitterIcon, FacebookIcon, HatenaIcon, PocketIcon },
  setup() {
    return { args };
  },
  template: `
    <share-button-component v-bind="args">
      <${args.default}Icon/>
    </share-button-component>
    `,
});
ShareButton.storyName = 'ShareButton';
