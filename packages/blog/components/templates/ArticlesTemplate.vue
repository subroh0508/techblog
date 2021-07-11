<script>
import ArticleSummary from '@components/organisms/ArticleSummary';
import { computed, ref, toRefs, watch } from 'vue';

export default {
  components: {
    ArticleSummary,
  },
  props: {
    articles: { type: Array, default: [] },
    limit: { type: Number, default: 10 },
    pagination: { type: Boolean, default: true },
  },
  setup(props) {
    const page = ref(0);

    const { articles, limit, pagination } = toRefs(props);
    const items = computed(() => articles.value.slice(0, (page.value + 1) * limit.value));
    const emptyItems = computed(() => !articles.value.length);
    const showLoadOlder = computed(() => pagination.value && (page.value + 1) * limit.value < articles.value.length);

    watch(articles, () => { page.value = 0; });

    return {
      items,
      emptyItems,
      showLoadOlder,
      loadOlder: () => { page.value++; },
    };
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
