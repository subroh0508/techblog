<script>
export default {
  props: {
    value: String,
    onClick: Function,
  },
}
</script>
<template>
  <h2 class='title' v-on:click='onClick()'>{{ value }}</h2>
</template>
<style scoped lang='scss'>
.title {
  margin: 0;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
}
</style>
