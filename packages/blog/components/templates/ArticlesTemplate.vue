<script>
import ArticleSummary from '../organisms/ArticleSummary';

export default {
  components: {
    ArticleSummary,
  },
  props: {
    articles: { type: Array, default: [] },
    limit: { type: Number, default: 10 },
    pagination: { type: Boolean, default: true },
  },
  data: () => ({ page: 0 }),
  computed: {
    items: function() {
      const { articles, limit, page } = this;

      return articles.slice(0, (page + 1) * limit);
    },
    emptyItems: function() {
      return !this.articles.length;
    },
    showLoadOlder: function() {
      const { pagination, articles, limit, page } = this;

      return pagination && (page + 1) * limit < articles.length;
    }
  },
  watch: {
    articles: function(to, from) {
      this.page = 0;
    }
  },
  methods: {
    loadOlder() {
      this.page += 1;
    },
  },
}
</script>
<template>
  <div class='articles-template'>
    <h1><slot/></h1>
    <div class='article-list' v-for='(article, idx) in items' v-bind:key="'article-' + idx">
      <article-summary v-bind='{ article }'/>
    </div>
    <div class='load-older' v-show='showLoadOlder'>
      <a v-on:click='loadOlder()'>次の{{ limit }}件</a>
    </div>
    <div class='empty' v-show='emptyItems'>記事が見つかりません😴</div>
  </div>
</template>
<style scoped lang='scss'>
.articles-template {
  .article-list {
    margin: 36px 0 48px;
  }
  .load-older {
    display: flex;
    justify-content: center;
  }
  .empty {
    padding: 48px 0;
  }
}
</style>
