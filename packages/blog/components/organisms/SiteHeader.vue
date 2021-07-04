<script>
import NavMenu from '@components/atoms/NavMenu';

import { useRoute, useRouter } from 'vue-router';

function redirectTo(router, route, name) {
  if (route.name === name && !Object.keys(route.query).length) return;

  router.push({ name });
}

export default {
  components: {
    NavMenu,
  },
  setup() {
    const router = useRouter();
    const route = useRoute();

    return {
      menuList: [
        { name: 'articles', display: 'Articles' },
        { name: 'about', display: 'About' },
      ],
      redirectTo: redirectTo.bind(null, router, route),
    };
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
