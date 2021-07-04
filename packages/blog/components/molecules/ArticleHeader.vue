<script>
import Date from '@components/atoms/Date';
import DisplayTitle from '@components/atoms/DisplayTitle';
import Tagbar from '@components/atoms/Tagbar';

import { useRouter, useRoute } from 'vue-router';

function openArticle(router, title) {
  router.push({ name: 'article', params: { title } });
}

function searchByTag(router, route, tag) {
  if (route.path === '/articles' && route.query.tag === tag) return;

  router.push({ name: 'articles', query: { tag } });
};

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
  setup(props) {
    const router = useRouter();
    const route = useRoute();

    return {
      ...props,
      openArticle: openArticle.bind(null, router),
      searchByTag: searchByTag.bind(null, router, route),
    }
  },
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
