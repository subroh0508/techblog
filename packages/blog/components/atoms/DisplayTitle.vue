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
  setup({ className, value, onClick }) {
    const handleOnClick = () => {
      if (className === 'text') return;

      onClick();
    }

    return {
      styleName: `title is-${className}`,
      value,
      handleOnClick,
    };
  },
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
