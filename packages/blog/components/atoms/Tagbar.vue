<script>
export default {
  props: {
    tags: Array,
    onClick: Function,
  },
}
</script>
<template>
  <div class='bar'>
    <a v-for='(tag, idx) in tags' v-bind:key='idx' v-on:click='onClick(tag)'>{{ tag }}</a>
  </div>
</template>
<style scoped lang='scss'>
@import '~@components/_color';

.bar {
  margin: 0 0 12px;
  display: flex;
  flex-wrap: wrap;

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
