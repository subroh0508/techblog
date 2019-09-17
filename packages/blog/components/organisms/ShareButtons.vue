<script>
import TwitterIcon from '@components/atoms/icons/Twitter';
import FacebookIcon from '@components/atoms/icons/Facebook';
import HatenaIcon from '@components/atoms/icons/Hatena';
import PocketIcon from '@components/atoms/icons/Pocket';
import ShareButton from '@components/atoms/ShareButton';
import {
  trackTwitterShare,
  trackFacebookShare,
  trackHatenaShare,
  trackPocketShare,
} from '@components/analytics';

export default {
  components: {
    TwitterIcon,
    FacebookIcon,
    HatenaIcon,
    PocketIcon,
    ShareButton,
  },
  props: {
    title: String,
    displayTitle: String,
    url: String,
  },
  methods: {
    shareOnTwitter() {
      const url = 'https://twitter.com/intent/tweet' +
        `?url=${encodeURIComponent(this.url)}` +
        `&text=${encodeURIComponent(this.displayTitle + ' - 横須賀第765管区情報局')}`;

      trackTwitterShare(this.title);
      window.open(url, '_blank');
    },
    shareOnFacebook() {
      const url = 'https://www.facebook.com/dialog/share' +
        '?app_id=510289996426924' +
        '&display=popup' +
        `&href=${encodeURIComponent(this.url)}` +
        `&redirect_uri=${encodeURIComponent(this.url)}`;

      trackFacebookShare(this.title);
      window.open(url, '_blank');
    },
    shareOnHatena() {
      const url = `https://b.hatena.ne.jp/entry/s/${this.url.replace('https:://', '')}`;

      trackHatenaShare(this.title);
      window.open(url, '_blank');
    },
    shareOnPocket() {
      const url = 'https://getpocket.com/edit' +
        `?url=${encodeURIComponent(this.url)}` +
        `&title=${encodeURIComponent(this.displayTitle + ' - 横須賀第765管区情報局')}`;

      trackPocketShare(this.title);
      window.open(url, '_blank');
    },
  },
}
</script>
<template>
  <div class='share-buttons'>
    <share-button v-bind:onClick='shareOnTwitter'>
      <twitter-icon/>
    </share-button>
    <share-button v-bind:onClick='shareOnFacebook'>
      <facebook-icon/>
    </share-button>
    <share-button v-bind:onClick='shareOnHatena'>
      <hatena-icon/>
    </share-button>
    <share-button v-bind:onClick='shareOnPocket'>
      <pocket-icon/>
    </share-button>
  </div>
</template>
<style scoped lang='scss'>
.share-buttons {
  display: flex;

  .share-button {
    &:not(:first-child) {
      margin-left: 12px;
    }

    &:hover .twitter {
      fill: #1da1f2;
    }
    &:hover .facebook {
      fill: #4267b2;
    }
    &:hover .hatena {
      fill: #00a4de;
    }
    &:hover .pocket {
      fill: #EF4056;
    }
  }
}
</style>
