<script>
import ArticlesTemplate from '../../templates/ArticlesTemplate';

import { searchArticles } from './finder';

export default {
  components: {
    ArticlesTemplate,
  },
  data: () => ({
    articles: [],
  }),
  mounted() {
    this.articles = searchArticles(this.$route.query);
  },
  computed: {
    title: function() {
      return this.$route.query.tag ? `タグ: ${this.$route.query.tag}` : '全ての記事';
    },
  },
  watch: {
    '$route.query': function() {
      this.articles = searchArticles(this.$route.query)
    },
  }
}
</script>
<template>
  <section class='articles'>
    <articles-template v-bind="{ articles }">
      {{ title }}
    </articles-template>
  </section>  
</template>
