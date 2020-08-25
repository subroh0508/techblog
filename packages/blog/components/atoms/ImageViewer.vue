<script>
export default {
  props: {
    src: String,
    alt: String,
  },
}
</script>
<template>
  <div class='image-viewer'>
    <img v-bind="{ src, alt }"/>
  </div>
</template>
<style scoped lang='scss'>
@import '~@components/_breakpoints';

.image-viewer {
  background-color: transparent;
  width: 100%;
  object-fit: cover;

  > img {
    background-color: black;
    object-fit: cover;
  }

  @media screen and (min-width: 0) {
   > img {
      position: relative;
      width: 80vw;

      &::before {
        display: block;
        width: 100%;
        padding-bottom: 100%;
        content: "";
      }
    }
  }

  @media screen and (min-width: $breakpoint-lg) {
    > img {
      width: 800px;
    }
  }

  @media screen and (min-width: $breakpoint-xl) {
    > img {
      width: 1000px;
    }
  }
}
</style>
