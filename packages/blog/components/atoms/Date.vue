<script>
const format = (date) => {
  const year = date.getFullYear();
  const month = date.getMonth().toString().padStart(2, '0');
  const day = date.getDate().toString().padStart(2, '0');

  return `${year}/${month}/${day}`;
}

export default {
  props: {
    className: { type: String, default: 'text' },
    value: Date,
  },
  data: () => ({
    date: '1970/01/01',
  }),
  created() {
    this.date = format(this.value)
  }
}
</script>
<template>
  <span v-bind:class="'date-' + className">{{ date }}</span>
</template>
<style scoped lang='scss'>
@import '../color';

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
