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
<template>
  <div>
    <header-view/>
    <about-view/>
    <footer-view/>
  </div>
</template>
<style src='./_global.scss'/>
