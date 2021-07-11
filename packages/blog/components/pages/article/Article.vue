<script>
import ArticleTemplate from '@components/templates/ArticleTemplate';
import { useStore } from 'vuex';
import { computed, onMounted, onServerPrefetch } from 'vue';

export default {
  components: {
    ArticleTemplate,
  },
  props: {
    title: String,
  },
  setup(props) {
    const store = useStore();

    const article = computed(() => store.state.article)
    const loading = computed(() => !Object.keys(article.value).length);
    const notFound = computed(() => article.value === null);
    const fetchArticle = async () => await store.dispatch('fetchArticle', props.title);

    onMounted(async () => {
      if (loading.value) {
        await fetchArticle();
      }

      // Initialize Twitter widgets when transit article
      if (twttr) {
        twttr.widgets.load();
      }
    });

    onServerPrefetch(fetchArticle);

    return {
      article,
      loading,
      notFound,
    };
  },
}
</script>
<template>
  <not-found v-if='notFound'/>
  <div v-else-if='loading'/>
  <article-template v-bind='{ article }' v-else/>
</template>
