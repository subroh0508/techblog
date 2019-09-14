<script>
import SiteHeader from './molecules/SiteHeader';
import FooterView from './global/footer/Footer';

export default {
  components: {
    SiteHeader,
    FooterView,
  },
}
</script>
<template>
  <div>
    <site-header/>
    <router-view/>
    <footer-view/>
  </div>
</template>
<style src='./_global.scss'/>
