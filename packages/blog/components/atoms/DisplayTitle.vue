<script>
export default {
  props: {
    className: {
      validator: (v) => ['link', 'text'].indexOf(v) !== -1,
      default: 'text',
    },
    value: String,
    onClick: Function,
  },
  methods: {
    handleOnClick() {
      if (this.className === 'text') return;

      this.onClick();
    },
  }
}
</script>
<template>
  <h2
    v-bind:class="'title is-' + className"
    v-on:click='handleOnClick()'
  >{{ value }}</h2>
</template>
<style scoped lang='scss'>
.title {
  margin: 0;

  &.is-link {
    cursor: pointer;

    &:hover {
      text-decoration: underline;
    }
  }
}
</style>
