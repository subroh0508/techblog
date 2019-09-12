<script>
import ArticleSummary from '../organisms/ArticleSummary';

export default {
  components: {
    ArticleSummary,
  },
  props: {
    articles: { type: Array, default: [] },
  }
}
</script>
<template>
  <div class='articles-template'>
    <h1><slot/></h1>
    <div v-for='(article, idx) in articles' v-bind:key="'article-' + idx">
      <article-summary v-bind='{ article }'/>
    </div>
  </div>
</template>
<style scoped lang='scss'>
.articles-template {
  > div {
    margin: 36px 0 48px;
  }
}
</style>
