<script>
import articles from '@techblog/articles/build/list';

const findArticle = async title => {
  const article = articles.find(a => a.title === title);

  const fullArticle = await import(`@techblog/articles/build/articles/${title}`);

  const publishedAt = new Date(fullArticle.publishedAt);
  const updatedAt = new Date(fullArticle.updatedAt);

  return {
    ...fullArticle,
    publishedAtFormatted: `${publishedAt.getFullYear()}/${publishedAt.getMonth().toString().padStart(2, '0')}/${publishedAt.getDate().toString().padStart(2, '0')}`,
    updatedAtFormatted: `${updatedAt.getFullYear()}/${updatedAt.getMonth().toString().padStart(2, '0')}/${updatedAt.getDate().toString().padStart(2, '0')}`,
  }
};

export default {
  props: {
    title: String,
  },
  data: () => ({
    article: {},
  }),
  async created() {
    this.article = await findArticle(this.title);
  }
}
</script>
<template src='./article.html'/>
<style src='./article.scss'/>
