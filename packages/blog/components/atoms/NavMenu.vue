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
@import '~@components/_color';
@import '~@components/_breakpoints';

.nav-menu {
  display: flex;
  justify-content: flex-end;
  align-items: center;

  > ul {
    margin-top: 0;
    padding: 0;

    > li {
      display: inline;

      > a {
        font-weight: bold;
        color: $text;
        padding: 0 10px;
      }
    }
  }

  @media screen and (min-width: $breakpoint-md) {
    > ul {
      margin: 18px 0;
    }
  }
}
</style>
