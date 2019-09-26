<script>
import router from 'app-router';
import OutlinedButton from '@components/atoms/OutlinedButton';
import ArticleHeader from '@components/molecules/ArticleHeader';

export default {
  components: {
    ArticleHeader,
    OutlinedButton,
  },
  props: {
    article: Object,
  },
  methods: {
    readMore: title => {
      router.push({ name: 'article', params: { title } });
    },
    prerender: async title => import(
      /* webpackPreload: true */ `@techblog/articles/build/articles/${title}`
    ),
  },
}
</script>
<template>
  <div class='article-summary' v-on:mouseover='prerender(article.title)'>
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
