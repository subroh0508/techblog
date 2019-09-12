<script>
import ArticleSummary from '../../organisms/ArticleSummary';

import articles from '@techblog/articles/build/list';

export default {
  components: {
    ArticleSummary,
  },
  data() {
    return {
      articles: articles.map(article => {
        return {
          ...article,
          publishedAt: new Date(article.publishedAt),
          updatedAt: new Date(article.updatedAt),
        };
      }).sort((a, b) => b.updatedAt - a.updatedAt),
    };
  },
}
</script>
<template>
  <section class='articles'>
    <h1>全ての記事</h1>
    <div v-for='(article, idx) in articles' v-bind:key="'article-' + idx">
      <article-summary v-bind='{ article }'/>
    </div>
  </section>
</template>
<style scoped lang='scss'>
.articles {
  > div {
    margin: 36px 0 48px;
  }
}
</style>
