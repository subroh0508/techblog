<script>
export default {
  props: {
    className: { type: String, default: 'text' },
    value: Date,
  },
  methods: {
    format: (date) => {
      if (!date) {
        return '1970/01/01';
      }

      const year = date.getFullYear();
      const month = (date.getMonth() + 1).toString().padStart(2, '0');
      const day = date.getDate().toString().padStart(2, '0');

      return `${year}/${month}/${day}`;
    },
  }
}
</script>
<template>
  <span v-bind:class="'date-' + className">{{ format(value) }}</span>
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
