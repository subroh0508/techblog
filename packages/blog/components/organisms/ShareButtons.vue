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

function shareOnTwitter(title, displayTitle, href) {
  const url = 'https://twitter.com/intent/tweet' +
    `?url=${encodeURIComponent(href)}` +
    `&text=${encodeURIComponent(displayTitle + ' - 横須賀第765管区情報局')}`;

  trackTwitterShare(title);
  window.open(url, '_blank');
}

function shareOnFacebook(title, href) {
  const url = 'https://www.facebook.com/dialog/share' +
    '?app_id=510289996426924' +
    '&display=popup' +
    `&href=${encodeURIComponent(href)}` +
    `&redirect_uri=${encodeURIComponent(href)}`;

  trackFacebookShare(title);
  window.open(url, '_blank');
}

function shareOnHatena(title, href) {
  const url = `https://b.hatena.ne.jp/entry/s/${href.replace(/^(http|https):\/\//, '')}`;

  trackHatenaShare(title);
  window.open(url, '_blank');
}

function shareOnPocket(title, displayTitle, href) {
  const url = 'https://getpocket.com/edit' +
    `?url=${encodeURIComponent(href)}` +
    `&title=${encodeURIComponent(displayTitle + ' - 横須賀第765管区情報局')}`;

  trackPocketShare(title);
  window.open(url, '_blank');
}

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
    path: String,
  },
  setup({ title, displayTitle, path }) {
    const href = `${process.env.BASE_URL}${path}/${title}`;

    return {
      shareOnTwitter: shareOnTwitter.bind(null, title, displayTitle, href),
      shareOnFacebook: shareOnFacebook.bind(null, title, href),
      shareOnHatena: shareOnHatena.bind(null, title, href),
      shareOnPocket: shareOnPocket.bind(null, title, displayTitle, href),
    }
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
  justify-content: flex-end;
  margin-top: 48px;

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
