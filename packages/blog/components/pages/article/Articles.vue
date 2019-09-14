<script>
import ArticlesTemplate from '../../templates/ArticlesTemplate';

import { searchArticles } from './finder';

export default {
  components: {
    ArticlesTemplate,
  },
  data() {
    return {
      articles: searchArticles(this.$route.query),
    };
  },
  methods: {
    title() {
      return this.$route.query.tag ? `タグ: ${this.$route.query.tag}` : '全ての記事';
    }
  },
}
</script>
<template>
  <section class='articles'>
    <articles-template v-bind="{ articles }">
      {{ title() }}
    </articles-template>
  </section>  
</template>
