<script>
import NavMenu from '@components/atoms/NavMenu';

export default {
  components: {
    NavMenu,
  },
  data: () => ({
    menuList: [
      { name: 'articles', display: 'Articles' },
      { name: 'about', display: 'About' },
    ],
  }),
  methods: {
    redirectTo(name) {
      const currentName = this.$router.currentRoute.value.name;
      const currentQuery = this.$router.currentRoute.value.query;

      if (currentName === name && !Object.keys(currentQuery).length) {
        return;
      }

      this.$router.push({ name });
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
@import '~@components/_breakpoints';
.header {
  display: block;
  margin: 0;

  .site-name {
    margin: 24px 0 0;
  }
  nav {
    margin: 0;
    justify-content: flex-end;
  }
}

@media screen and (min-width: $breakpoint-md) {
  .header {
    display: flex;
    margin: 0 auto;

    .site-name {
      flex: 2;
      margin: 24px 0;
      cursor: pointer;
    }
    nav {
      flex: 1;
    }
  }
}

</style>
