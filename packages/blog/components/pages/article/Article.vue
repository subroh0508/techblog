<script>
import ArticleTemplate from '@components/templates/ArticleTemplate';

export default {
  components: {
    ArticleTemplate,
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

    // Initialize Twitter widgets when transit article
    if (twttr) {
      twttr.widgets.load();
    }
  },
  methods: {
    fetchArticle() {
      return this.$store.dispatch('fetchArticle', this.title);
    },
  },
  computed: {
    loading() {
      return !Object.keys(this.article).length;
    },
    notFound() {
      return this.article === null;
    },
    article() {
      if (!this.$store) {
        return {};
      }

      return this.$store.state.article;
    },
  },
}
</script>
<template>
  <not-found v-if='notFound'/>
  <div v-else-if='loading'/>
  <article-template v-bind='{ article }' v-else/>
</template>
