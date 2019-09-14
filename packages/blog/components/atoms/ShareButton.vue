<script>
export default {
  props: {
    name: String,
    href: String,
  },
}
</script>
<template>
  <a class='share-button' v-bind:href='href'><slot/></a>
</template>
<style scoped lang='scss'>
.share-button {
  width: 32px;
  height: 32px;

  > svg {
    width: 24px;
    height: 24px;
  }
}
</style>
