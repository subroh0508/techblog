<script>
import ArticlesTemplate from '@components/templates/ArticlesTemplate';

import { searchArticles } from '@components/finder';
import { useRoute } from 'vue-router';
import { computed, onMounted, ref, watch } from 'vue';

export default {
  components: {
    ArticlesTemplate,
  },
  setup() {
    const articles = ref([]);
    const route = useRoute();

    onMounted(() => { articles.value = searchArticles(route.query) });
    watch(route, () => { articles.value = searchArticles(route.query); });

    // Null check for Snapshot Test
    const title = computed(() => route && route.query && route.query.tag ? `タグ: ${route.query.tag}` : '全ての記事');

    return {
      articles,
      title,
    };
  },
}
</script>
<template>
  <section class='articles'>
    <articles-template v-bind="{ articles }">
      {{ title }}
    </articles-template>
  </section>  
</template>
