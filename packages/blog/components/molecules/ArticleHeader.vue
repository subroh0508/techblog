<script>
import router from 'app-router';
import Date from '@components/atoms/Date';
import DisplayTitle from '@components/atoms/DisplayTitle';
import Tagbar from '@components/atoms/Tagbar';

export default {
  components: {
    Date,
    DisplayTitle,
    Tagbar,
  },
  props: {
    className: {
      type: Object,
      default: () => ({ displayTitle: 'link', publishedAt: 'subtitle' }),
    },
    title: String,
    displayTitle: String,
    publishedAt: Date,
    tags: Array,
  },
  methods: {
    openArticle: (title) => {
      router.push({ name: 'article', params: { title } });
    },
    searchByTag: (tag) => {
      const currentPath = router.currentRoute.path;
      const currentTag = router.currentRoute.query.tag;
      if (currentPath === '/articles' && currentTag === tag) {
        return;
      }

      router.push({ name: 'articles', query: { tag } });
    }
  }
}
</script>
<template>
  <div>
    <date v-bind="{
      className: className.publishedAt,
      value: publishedAt
    }"/>
    <display-title v-bind="{
      className: className.displayTitle,
      value: displayTitle,
      onClick: openArticle.bind(null, title)
    }"/>
    <tagbar v-bind='{
      tags,
      onClick: searchByTag,
    }'/>
  </div>  
</template>
