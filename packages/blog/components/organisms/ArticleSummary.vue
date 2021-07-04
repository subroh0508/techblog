<script>
import OutlinedButton from '@components/atoms/OutlinedButton';
import ArticleHeader from '@components/molecules/ArticleHeader';

import { useRouter } from 'vue-router';
import { useStore } from 'vuex';

export default {
  components: {
    ArticleHeader,
    OutlinedButton,
  },
  props: {
    article: Object,
  },
  setup() {
    const router = useRouter();
    const store = useStore();

    return {
      readMore: (title) => router.push({ name: 'article', params: { title } }),
      prefetch: async (title) => store.dispatch('fetchArticle', title),
    }
  },
}
</script>
<template>
  <div class='article-summary' v-on:mouseover='prefetch(article.title)'>
    <article-header v-bind='article'/>
    <div>
      {{ article.description }}
      <outlined-button v-bind='{ onClick: readMore.bind(null, article.title) }'>
        Read More >>
      </outlined-button>
    </div>
  </div>
</template>
<style scoped lang='scss'>
.article-summary {
  &:not(:first-child) {
    padding-top: 80px;
  }
}
</style>
