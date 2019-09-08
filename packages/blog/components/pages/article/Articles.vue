<script>
import router from '../../../router';

import articles from '@techblog/articles/build/list';

export default {
  data() {
    return {
      articles: articles.map(article => {
        const publishedAt = new Date(article.publishedAt);
        const updatedAt = new Date(article.updatedAt);

        return {
          ...article,
          publishedAt,
          updatedAt,
          publishedAtFormatted: `${publishedAt.getFullYear()}/${publishedAt.getMonth()}/${publishedAt.getDate()}`,
          updatedAtFormatted: `${updatedAt.getFullYear()}/${updatedAt.getMonth()}/${updatedAt.getDate()}`,
        };
      }).sort((a, b) => b.updatedAt - a.updatedAt),
    };
  },
  methods: {
    readMore: (title) => {
      router.push({ name: 'article', params: { title } });
    },
  }
}
</script>
<template src='./articles.html'/>
<style src='./articles.scss'/>
