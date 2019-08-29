<template>
  <div>
    <header-view/>
    <about-view/>
    <footer-view/>
  </div>
</template>
<style lang='scss'>
body {
  background-color: ghostwhite;
}
section {
  max-width: 800px;
  margin: 0 auto;
}
hr {
  color: gainsboro;
}
</style>
<script>
import HeaderView from './global/header/Header';
import FooterView from './global/footer/Footer';
import AboutView from './pages/about/About'

export default {
  components: {
    HeaderView,
    FooterView,
    AboutView,
  },
}
</script>
