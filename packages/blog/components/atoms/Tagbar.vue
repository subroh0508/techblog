<script>
export default {
  props: {
    tags: Array,
  }
}
</script>
<template>
  <div class='bar'>
    <a v-for='(tag, idx) in tags' v-bind:key='idx'>{{ tag }}</a>
  </div>
</template>
<style scoped lang='scss'>
@import '../color';

.bar {
  margin: 0 0 12px;

  > a {
    color: $subtitle;
    padding-right: 15px;
    text-decoration: none;

    &:before {
      content: '#';
    }
    &:hover {
      text-decoration: underline;
    }
  }
}
</style>
