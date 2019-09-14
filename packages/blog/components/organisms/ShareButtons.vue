<script>
import TwitterIcon from '../atoms/icons/Twitter';
import ShareButton from '../atoms/ShareButton';

export default {
  components: {
    TwitterIcon,
    ShareButton,
  },
  props: {
    displayTitle: String,
    url: String,
  },
  data() {
    return {
      services: [{ name: 'Twitter', href: this.url }],
    };
  },
}
</script>
<template>
  <div class='share-buttons'>
    <share-button v-bind='services[0]'>
      <twitter-icon/>
    </share-button>
  </div>
</template>
<style scoped lang='scss'>
.share-buttons {
  display: flex;
}
</style>
