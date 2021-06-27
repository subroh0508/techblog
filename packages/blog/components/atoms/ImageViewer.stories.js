import ImageViewerComponent from '@components/atoms/ImageViewer';
import sample1 from '@assets/madoka.png';
import sample2 from '@assets/poplinks.png';
import sample3 from '@assets/poplinks_play1.gif';
import sample4 from '@assets/poplinks_play2.gif';

export default {
  title: 'Components/atoms/ImageViewer',
  component: ImageViewerComponent,
  argTypes: {
    src: {
      defaultValue: sample1,
      options: [sample1, sample2, sample3, sample4],
      control: { type: 'radio' },
    },
    alt: {
      control: { type: 'text' },
    },
  }
}

export const ImageViewer = (args) => ({
  components: { ImageViewerComponent },
  setup() {
    return { args };
  },
  template: '<image-viewer-component v-bind="args"/>',
});
ImageViewer.storyName = 'ImageViewer';
