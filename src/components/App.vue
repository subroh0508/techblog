<script>
import HeaderView from './global/header/Header';
import FooterView from './global/footer/Footer';

export default {
  components: {
    HeaderView,
    FooterView,
  },
}
</script>
<template>
  <div>
    <header-view/>
    <router-view/>
    <footer-view/>
  </div>
</template>
<style src='./_global.scss'/>
