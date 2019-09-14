<script>
import ArticleHeader from '../../molecules/ArticleHeader';

import articles from '@techblog/articles/build/list';

const findArticle = async title => {
  const article = articles.find(a => a.title === title);

  const fullArticle = await import(`@techblog/articles/build/articles/${title}`);

  const publishedAt = new Date(fullArticle.publishedAt);
  const updatedAt = new Date(fullArticle.updatedAt);

  return {
    ...fullArticle,
    publishedAt: new Date(fullArticle.publishedAt),
    updatedAt: new Date(fullArticle.updatedAt),
  }
};

export default {
  components: {
    ArticleHeader,
  },
  props: {
    title: String,
  },
  data: () => ({
    article: {},
  }),
  async created() {
    this.article = await findArticle(this.title);
  }
}
</script>
<template>
  <section class='article'>
    <article-header v-bind="{ className: { displayTitle: 'text' }, ...article }"/>
    <span v-show='article.body' v-html='article.body'></span>
  </section>
</template>
<style scoped lang='scss'>
@import '../../color';

.article /deep/ {
  @import 'highlight.js/styles/androidstudio';

  pre > code {
    border-radius: 0.25rem;

    &.hljs {
      font-size: 1.2rem;
    }
  }

  h1, h2, h3, h4, h5, h6 {
    &:hover > a[data-hash-link] {
      opacity: 1;
    }
  }
  a[data-hash-link] {
    display: inline-block;
    margin-left: -1em;
    padding-right: 0.3em;
    color: $text;

    text-decoration: none;

    opacity: 0;

    &:hover {
      text-decoration: underline;
    }
  }
}
</style>
