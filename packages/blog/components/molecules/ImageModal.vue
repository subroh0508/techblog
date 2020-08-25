<script>
import ImageViewer from '@components/atoms/ImageViewer';

export default {
  components: {
    ImageViewer,
  },
  props: {
    src: String,
    alt: String,
    onClose: Function,
  },
}
</script>
<template>
  <transition name='modal'>
    <div class='modal-backdrop'>
      <div class='modal-wrapper'>
        <div class='modal-content'>
          <image-viewer v-bind="{ src, alt }"/>
          <span class='button-modal-close' v-on:click='onClose()'>閉じる</span>
        </div>
      </div>
    </div>  
  </transition>
</template>
<style scoped lang='scss'>
@import '~@components/_color';
@import '~@components/_breakpoints';

.modal-backdrop {
  position: fixed;
  z-index: 1000;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
}

.modal-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
}

.modal-content {
  position: relative;
}

.button-modal-close {
  position: absolute;
  top: 0;
  right: 0;
  background: rgba(255,255,255,0.2);
  padding: 0 0.5em;
  border-radius: 0.25rem;
  color: $light-text;
}
</style>
