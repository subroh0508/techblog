<script>
export default {
  props: {
    onClick: Function,
  },
}
</script>
<template>
  <a class='share-button' v-on:click='onClick()'><slot/></a>
</template>
<style scoped lang='scss'>
@import '~@components/_color';

.share-button {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center; 
  height: 44px;
  width: 44px;
  box-shadow: inset 0 0 0 2px $title;
  border-radius: 100%;

  :first-child {
    width: 20px;
    height: 20px;
  }
}
</style>
