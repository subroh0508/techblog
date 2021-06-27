import ImageModalComponent from '@components/molecules/ImageModal';

export default {
  title: 'Components/molecules/ImageModal',
  component: ImageModalComponent,
  argTypes: {
    filename: {
      defaultValue: 'madoka.png',
      options: ['madoka.png', 'poplinks.png'],
      control: { type: 'radio' },
    },
    showModal: {
      defaultValue: true,
      control: { type: 'boolean' },
    },
    onClose: { action: 'closed' },
  }
}

export const ImageModal = (args) => ({
  components: { ImageModalComponent },
  setup() {
    return { args };
  },
  template: '<image-modal-component v-bind="args" />'
});
ImageModal.storyName = 'ImageModal';
