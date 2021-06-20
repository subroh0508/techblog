import ImageModalComponent from '@components/molecules/ImageModal';

export default {
  title: 'Components/molecules/ImageModal',
  component: ImageModalComponent,
}

export const ImageModal = (args) => ({
  components: { ImageModalComponent },
  setup() {
    return { args };
  },
  template: '<image-modal-component v-bind="args" />'
});
ImageModal.args = {
  filename: 'madoka.png',
  showModal: true,
  onClose: () => console.log('clicked!'),
};
