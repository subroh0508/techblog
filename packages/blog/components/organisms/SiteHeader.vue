<script>
import router from '../../router';

import NavMenu from '../atoms/NavMenu';

export default {
  components: {
    NavMenu,
  },
  data: () => ({
    menuList: [
      { name: 'articles', display: 'Articles' },
      { name: 'about', display: 'About' },
      { name: 'links', display: 'Links' },
    ],
  }),
  methods: {
    redirectTo: (name) => {
      const currentName = router.currentRoute.name;
      const currentQuery = router.currentRoute.query;

      if (currentName === name && !Object.keys(currentQuery).length) {
        return;
      }

      router.push({ name });
    },
  },
}
</script>
<template>
  <section class="header">
    <h1 class='site-name' v-on:click="redirectTo('home')">横須賀第765管区情報局</h1>
    <nav-menu v-bind="{ menuList, onClick: redirectTo }"/>
  </section>
</template>
<style scoped lang="scss" >
.header {
  display: flex;

  .site-name {
    flex: 2;
    margin: 24px 0;
    cursor: pointer;
  }
  nav {
    flex: 1;
  }
}
</style>
