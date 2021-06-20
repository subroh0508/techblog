import ImageViewerComponent from '@components/atoms/ImageViewer';
import sample from '@assets/madoka.png'

export default {
  title: 'Components/atoms/ImageViewer',
  component: ImageViewerComponent,
}

export const ImageViewer = (args) => ({
  components: { ImageViewerComponent },
  setup() {
    return { args };
  },
  template: '<image-viewer-component v-bind="args"/>',
});
ImageViewer.args = { src: sample, alt: 'madoka.png' };
