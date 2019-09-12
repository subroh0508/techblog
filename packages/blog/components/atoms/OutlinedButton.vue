<script>
export default {
  props: {
    onClick: Function,
  },
}
</script>
<template>
  <a class='outlined-button' v-on:click='onClick()'>
    <slot/>
  </a>
</template>
<style scoped lang='scss'>
@import '../color';

.outlined-button {
  height: 33px;
  font-size: 16px;
  text-decoration: underline;
  padding: 0 10px;
  display: inline-flex;
  align-items: center;
  border: 1px solid transparent;
  border-radius: 3px;
  color: $text;

  &:hover {
    background: silver;
  }
}
</style>
