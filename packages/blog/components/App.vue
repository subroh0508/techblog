<script>
import SiteHeader from './organisms/SiteHeader';
import SiteFooter from './organisms/SiteFooter';

import insertMetaTags from './insertMetaTags';
import { updateConfig } from './analytics';
import { useRoute } from 'vue-router';
import { onMounted, watch } from 'vue';

export default {
  components: {
    SiteHeader,
    SiteFooter,
  },
  setup() {
    const route = useRoute();

    onMounted(() => {
      updateConfig(route);
      insertMetaTags(route);
    });

    watch(route, (to, _) => {
      updateConfig(to);
      insertMetaTags(to);
    });
  },
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
