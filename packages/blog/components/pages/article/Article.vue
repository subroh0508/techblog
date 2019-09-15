<script>
import ArticleHeader from '../../molecules/ArticleHeader';
import ShareButtons from '../../organisms/ShareButtons';

import { findFullArticle } from './finder';

export default {
  components: {
    ArticleHeader,
    ShareButtons,
  },
  props: {
    title: String,
  },
  data: () => ({
    article: {},
    url: window.location.href,
  }),
  async created() {
    this.article = await findFullArticle(this.title);
  }
}
</script>
<template>
  <section class='article'>
    <article-header v-bind="{ className: { displayTitle: 'text' }, ...article }"/>
    <span v-show='article.body' v-html='article.body'></span>
    <share-buttons v-bind="{
      url,
      displayTitle: article.displayTitle,
    }"/>
  </section>
</template>
<style scoped lang='scss'>
@import '../../color';

.article /deep/ {
  @import 'highlight.js/styles/androidstudio';

  pre {
    background: $code-background;
    border-radius: 0.25rem;

    > div.filename {
      display: inline-block;
      background: rgba(255,255,255,0.2);
      padding: 0 0.5em;
      border-radius: 0.25rem;
      color: $light-text;
    }

    > code.hljs {
      margin: 0;
      border: none;
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
