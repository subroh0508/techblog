<script>
import SiteHeader from './organisms/SiteHeader';
import SiteFooter from './organisms/SiteFooter';

export default {
  components: {
    SiteHeader,
    SiteFooter,
  },
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
