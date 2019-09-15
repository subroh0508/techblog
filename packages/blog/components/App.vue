<script>
import SiteHeader from './organisms/SiteHeader';
import SiteFooter from './organisms/SiteFooter';

import insertMetaTags from './insertMetaTags';

export default {
  components: {
    SiteHeader,
    SiteFooter,
  },
  mounted() {
    insertMetaTags(this.$route);
  },
  watch: {
    '$route': function (to, from) {
      insertMetaTags(to);
    }
  }
}
</script>
<template>
  <div>
    <site-header/>
    <router-view/>
    <site-footer/>
  </div>
</template>
<style src='./_global.scss'/>
