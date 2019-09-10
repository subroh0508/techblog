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
          publishedAtFormatted: `${publishedAt.getFullYear()}/${publishedAt.getMonth().toString().padStart(2, '0')}/${publishedAt.getDate().toString().padStart(2, '0')}`,
          updatedAtFormatted: `${updatedAt.getFullYear()}/${updatedAt.getMonth().toString().padStart(2, '0')}/${updatedAt.getDate().toString().padStart(2, '0')}`,
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
