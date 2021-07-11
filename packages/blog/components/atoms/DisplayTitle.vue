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
  computed: {
    styleName: vm => `title is-${vm.className}`,
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
    v-bind:class="styleName"
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
