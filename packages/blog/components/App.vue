<script>
import SiteHeader from './organisms/SiteHeader';
import SiteFooter from './organisms/SiteFooter';

import insertMetaTags from './insertMetaTags';
import { updateConfig } from './analytics';

export default {
  components: {
    SiteHeader,
    SiteFooter,
  },
  mounted() {
    updateConfig(this.$route);
    insertMetaTags(this.$route);
  },
  watch: {
    '$route': function (to, from) {
      updateConfig(to);
      insertMetaTags(to);
    }
  }
}
</script>
<template>
  <div id="app">
    <div>
      <site-header/>
      <router-view/>
      <site-footer/>
    </div>
  </div>
</template>
<style src='./_global.scss'/>
