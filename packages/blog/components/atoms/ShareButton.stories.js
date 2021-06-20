import ShareButton from '@components/atoms/ShareButton';
import TwitterIcon from '@components/atoms/icons/Twitter';
import FacebookIcon from '@components/atoms/icons/Facebook';
import HatenaIcon from '@components/atoms/icons/Hatena';
import PocketIcon from '@components/atoms/icons/Pocket';

export default {
  title: 'Components/atoms/ShareButton',
  component: ShareButton,
}

export const TwitterShareButton = () => ({
  components: { ShareButton, TwitterIcon },
  setup() {
    return { args: { onClick: () => console.log('Twitter is clicked!') } }
  },
  template: `
    <share-button v-bind="args">
      <twitter-icon/>
    </share-button>
    `,
});

export const FacebookShareButton = () => ({
  components: { ShareButton, FacebookIcon },
  setup() {
    return { args: { onClick: () => console.log('Facebook is clicked!') } }
  },
  template: `
    <share-button v-bind="args">
      <facebook-icon/>
    </share-button>
    `,
});

export const HatenaShareButton = () => ({
  components: { ShareButton, HatenaIcon },
  setup() {
    return { args: { onClick: () => console.log('Hatena is clicked!') } }
  },
  template: `
    <share-button v-bind="args">
      <hatena-icon/>
    </share-button>
    `,
});

export const PocketShareButton = () => ({
  components: { ShareButton, PocketIcon },
  setup() {
    return { args: { onClick: () => console.log('Pocket is clicked!') } }
  },
  template: `
    <share-button v-bind="args">
      <pocket-icon/>
    </share-button>
    `,
});
