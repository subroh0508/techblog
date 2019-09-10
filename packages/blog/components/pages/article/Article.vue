<script>
import articles from '@techblog/articles/build/list';

const findArticle = async title => {
  const article = articles.find(a => a.title === title);

  const fullArticle = await import(`@techblog/articles/build/articles/${title}`);

  const publishedAt = new Date(fullArticle.publishedAt);
  const updatedAt = new Date(fullArticle.updatedAt);

  return {
    ...fullArticle,
    publishedAtFormatted: `${publishedAt.getFullYear()}/${publishedAt.getMonth()}/${publishedAt.getDate()}`,
    updatedAtFormatted: `${updatedAt.getFullYear()}/${updatedAt.getMonth()}/${updatedAt.getDate()}`,
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
