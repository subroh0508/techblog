<script>
import router from '../../router';
import Date from '../atoms/Date';
import DisplayTitle from '../atoms/DisplayTitle';
import Tagbar from '../atoms/Tagbar';

export default {
  components: {
    Date,
    DisplayTitle,
    Tagbar,
  },
  props: {
    title: String,
    displayTitle: String,
    publishedAt: Date,
    tags: Array,
  },
  methods: {
    openArticle: (title) => {
      router.push({ name: 'article', params: { title } });
    },
  }
}
</script>
<template>
  <div>
    <date v-bind="{ className: 'subtitle', value: publishedAt }"/>
    <display-title v-bind='{ value: displayTitle, onClick: openArticle.bind(null, title) }'/>
    <tagbar v-bind='{ tags }'/>
  </div>  
</template>
