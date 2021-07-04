<script>
const format = (date) => {
  if (!date) {
    return '1970/01/01';
  }

  const year = date.getFullYear();
  const month = (date.getMonth() + 1).toString().padStart(2, '0');
  const day = date.getDate().toString().padStart(2, '0');

  return `${year}/${month}/${day}`;
}

export default {
  props: {
    className: { type: String, default: 'text' },
    value: Date,
  },
  setup({ className, value }) {
    return {
      styleName: `date-${className}`,
      date: format(value),
    };
  },
}
</script>
<template>
  <span v-bind:class="styleName">{{ date }}</span>
</template>
<style scoped lang='scss'>
@import '~@components/_color';

.date {
  &-title {
    color: $title;
  }
  &-subtitle {
    color: $subtitle;
  }
  &-text {
    color: $text;
  }
}
</style>
