<script>
import ArticleHeader from '@components/molecules/ArticleHeader';
import ShareButtons from '@components/organisms/ShareButtons';

export default {
  components: {
    ArticleHeader,
    ShareButtons,
  },
  props: {
    title: String,
  },
  serverPrefetch() {
    return this.fetchArticle();
  },
  mounted() {
    if (this.loading) {
      this.fetchArticle();
    }
  },
  methods: {
    fetchArticle() {
      return this.$store.dispatch('fetchArticle', this.title);
    }
  },
  computed: {
    loading() {
      return !Object.keys(this.article).length;
    },
    notFound() {
      return this.article === null;
    },
    article() {
      return this.$store.state.article;
    }
  }
}
</script>
<template>
  <not-found v-if='notFound'/>
  <div v-else-if='loading'/>
  <section class='article' v-else>
    <article-header class='article-header' v-bind="{
      className: { displayTitle: 'text' },
      title: article.title,
      displayTitle: article.displayTitle,
      publishedAt: article.publishedAt,
      tags: article.tags,
    }"/>
    <span v-show='article.body' v-html='article.body'></span>
    <share-buttons v-bind="{
      baseUrl: '/articles',
      title: article.title,
      displayTitle: article.displayTitle,
    }"/>
  </section>
</template>
<style scoped lang='scss'>
@import '~@components/_color';

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

  .article-header {
    margin-bottom: 48px;
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
  blockquote {
    background: $blockquote-background;
    margin-inline-start: 20px;
    margin-inline-end: 20px;
    padding: 10px 20px;
    border-radius: 4px;
  }
}
</style>
