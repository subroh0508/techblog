<script>
import ArticleHeader from '@components/molecules/ArticleHeader';
import ImageModal from '@components/molecules/ImageModal';
import ShareButtons from '@components/organisms/ShareButtons';

export default {
  components: {
    ArticleHeader,
    ImageModal,
    ShareButtons,
  },
  props: {
    article: Object,
  },
  data: () => ({
    previewFilename: null,
  }),
  mounted() {
    this.addClickListeners(this.$refs.body);
  },
  methods: {
    addClickListeners(bodyElement) {
      if (!bodyElement) {
        return;
      }

      bodyElement.getElementsByClassName('image-preview').forEach((img) => {
        img.addEventListener('click', () => {
          this.previewFilename = img.dataset.filename;
        });
      });
    },
    closeModal() {
      this.previewFilename = null;
    },
  },
  computed: {
    showModal() {
      return !!this.previewFilename;
    },
  },
}
</script>
<template>
  <section class='article'>
    <article-header class='article-header' v-bind="{
      className: { displayTitle: 'text' },
      title: article.title,
      displayTitle: article.displayTitle,
      publishedAt: article.publishedAt,
      tags: article.tags,
    }"/>
    <span v-show='article.body' v-html='article.body' ref='body'></span>
    <share-buttons v-bind="{
      path: '/articles',
      title: article.title,
      displayTitle: article.displayTitle,
    }"/>
    <image-modal v-bind="{
      showModal,
      filename: previewFilename,
      onClose: closeModal,
    }"></image-modal>
  </section>
</template>
<style lang='scss'>
@import '~@components/_color';

.article {
  @import 'highlight.js/styles/androidstudio';

  .hljs {
    display: block;
  }

  pre {
    background: $code-background;
    border-radius: 0.25rem;

    > div.filename {
      display: inline-block;
      background: rgba(255,255,255,0.2);
      padding: 0 0.5em;
      border-radius: 0.25rem;
      color: $light-text;
    }

    > code.hljs {
      margin: 0;
      border: none;
      font-size: 1.2rem;
    }
  }

  .article-header {
    margin-bottom: 48px;
  }
  h1, h2, h3, h4, h5, h6 {
    &:hover > a[data-hash-link] {
      opacity: 1;
    }
  }
  a[data-hash-link] {
    display: inline-block;
    margin-left: -1em;
    padding-right: 0.3em;
    color: $text;

    text-decoration: none;

    opacity: 0;

    &:hover {
      text-decoration: underline;
    }
  }
  blockquote {
    background: $blockquote-background;
    margin-inline-start: 20px;
    margin-inline-end: 20px;
    padding: 10px 20px;
    border-radius: 4px;
  }
  .movie {
    position: relative;
    width: 100%;
    height: 0;
    padding-top: 56.25%;

    > iframe {
      position: absolute;
      top:0;
      left:0;
      width: 100%;
      height: 100%;
    }
  }
  .image-preview {
    display: block;
    margin: 0 auto;

    &[data-filename] {
      cursor: pointer;
    }
  }
}
</style>
