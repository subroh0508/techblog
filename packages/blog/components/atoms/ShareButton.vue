<script>
export default {
  props: {
    href: String,
  },
}
</script>
<template>
  <a class='share-button' target='_blank' v-bind:href='href'><slot/></a>
</template>
<style scoped lang='scss'>
@import '../color';

.share-button {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center; 
  height: 44px;
  width: 44px;
  box-shadow: inset 0 0 0 2px $title;
  border-radius: 100%;

  > svg {
    width: 20px;
    height: 20px;
  }
}
</style>
