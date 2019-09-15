<script>
import TwitterIcon from '../atoms/icons/Twitter';
import FacebookIcon from '../atoms/icons/Facebook';
import HatenaIcon from '../atoms/icons/Hatena';
import PocketIcon from '../atoms/icons/Pocket';
import ShareButton from '../atoms/ShareButton';

export default {
  components: {
    TwitterIcon,
    FacebookIcon,
    HatenaIcon,
    PocketIcon,
    ShareButton,
  },
  props: {
    displayTitle: String,
    url: String,
  },
  methods: {
    hrefForTwitter() {
      return 'https://twitter.com/intent/tweet' +
        `?url=${encodeURIComponent(this.url)}` +
        `&text=${encodeURIComponent(this.displayTitle + ' - 横須賀第765管区情報局')}`;
    },
    hrefForFacebook() {
      return 'https://www.facebook.com/dialog/share' +
        '?app_id=510289996426924' +
        '&display=popup' +
        `&href=${encodeURIComponent(this.url)}` +
        `&redirect_uri=${encodeURIComponent(this.url)}`;
    },
    hrefForHatena() {
      return `https://b.hatena.ne.jp/entry/s/${this.url.replace('https:://', '')}`;
    },
    hrefForPocket() {
      return 'https://getpocket.com/edit' +
        `?url=${encodeURIComponent(this.url)}` +
        `&title=${encodeURIComponent(this.displayTitle + ' - 横須賀第765管区情報局')}`;
    },
  },
}
</script>
<template>
  <div class='share-buttons'>
    <share-button v-bind:href='hrefForTwitter()'>
      <twitter-icon/>
    </share-button>
    <share-button v-bind:href='hrefForFacebook()'>
      <facebook-icon/>
    </share-button>
    <share-button v-bind:href='hrefForHatena()'>
      <hatena-icon/>
    </share-button>
    <share-button v-bind:href='hrefForPocket()'>
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
