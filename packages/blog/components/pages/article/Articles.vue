<script>
import ArticlesTemplate from '../../templates/ArticlesTemplate';

import articles from '@techblog/articles/build/list';

export default {
  components: {
    ArticlesTemplate,
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
    <articles-template v-bind="{ articles }">
      全ての記事
    </articles-template>
  </section>  
</template>
