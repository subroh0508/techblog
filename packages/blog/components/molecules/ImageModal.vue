<script>
import ImageViewer from '@components/atoms/ImageViewer';

export default {
  components: {
    ImageViewer,
  },
  props: {
    filename: String,
    showModal: Boolean,
    onClose: Function,
  },
  computed: {
    src: vm => `${process.env.IMAGES_BASE_URL}/${vm.filename}`,
  },
  methods: {
    onClickContent(event) {
      event.stopPropagation();
    },
  }
}
</script>
<template>
  <transition name='backdrop'>
    <div v-show="showModal" class='modal-backdrop' v-on:click="onClose()">
      <transition name='modal'>
        <div v-if="showModal" class='modal-wrapper'>
          <div class='modal-content' v-on:click="onClickContent">
            <image-viewer v-bind="{ src, alt: filename }"/>
            <span class='button-modal-close' v-on:click="onClose()">閉じる</span>
          </div>
        </div>
      </transition>
    </div>
  </transition>  
</template>
<style scoped lang='scss'>
@import '~@components/_color';
@import '~@components/_breakpoints';

$transition-delay: 0.15s;

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
  cursor: pointer;
}

.backdrop-leave-active {
 transition-delay: $transition-delay;
}

.modal-enter-active {
  animation: scale-in $transition-delay ease-out;
}

.modal-leave-active {
  animation: scale-out $transition-delay ease-in;
}

@keyframes scale-in {
  0% {
    transform: scale(0.5);
  }
  100% {
    transform: scale(1);
  }
}

@keyframes scale-out {
  0% {
    transform: scale(1);
  }
  100% {
    transform: scale(0.5);
  }
}
</style>
