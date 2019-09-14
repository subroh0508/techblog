<script>
export default {
  props: {
    menuList: Array,
    onClick: Function,
  },
}
</script>
<template>
  <nav class='nav-menu'>
    <ul>
      <li v-for='(menu, idx) in menuList' v-bind:key='idx'>
        <a v-on:click="onClick(menu.name)">{{ menu.display }}</a>
      </li>
    </ul>
  </nav>
</template>
<style scoped lang='scss'>
.nav-menu {
  display: flex;
  align-items: center;

  > ul {
    padding: 0;

    > li {
      display: inline;

      > a {
        padding: 0 10px;
      }
    }
  }
}
</style>
