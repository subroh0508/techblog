import TagbarComponent from '@components/atoms/Tagbar';

export default {
  title: 'Components/atoms/Tagbar',
  component: TagbarComponent,
  argTypes: {
    tags: {
      defaultValue: ['Android', 'Kotlin', '怪文書'],
      control: { type: 'array' },
    },
    onClick: { action: 'clicked' },
  }
}

export const Tagbar = (args) => ({
  components: { TagbarComponent },
  setup() {
    return { args };
  },
  template: '<tagbar-component v-bind="args"/>',
});
