<script>
import ArticlesTemplate from '@components/templates/ArticlesTemplate';

import { searchArticles } from '@components/pages/article/finder';

export default {
  components: {
    ArticlesTemplate,
  },
  data: () => ({
    articles: [],
  }),
  mounted() {
    this.articles = searchArticles();
  },
}
</script>
<template>
  <section class='home'>
    <div class='top-img'><img src='/home.webp'/></div>
    <hr>
    <articles-template v-bind="{ articles, limit: 3, pagination: false }">
      最近の記事
    </articles-template>
  </section>
</template>
<style scoped lang="scss">
.home {
  .top-img {
    display: flex;
    justify-content: center;
    
    img {
      max-width: 80%;
    }
  }
  hr {
    margin-top: 48px;
  }
}
</style>
