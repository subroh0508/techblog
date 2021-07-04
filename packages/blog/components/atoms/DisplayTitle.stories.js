import DisplayTitleComponent from '@components/atoms/DisplayTitle';

export default {
  title: 'Components/atoms/DisplayTitle',
  component: DisplayTitleComponent,
  argTypes: {
    className: {
      defaultValue: 'text',
      options: ['text', 'link'],
      control: { type: 'radio' },
    },
    value: {
      defaultValue: '記事タイトル',
      control: { type: 'text' },
    },
    onClick: { action: 'clicked' },
  },
}

export const DisplayTitle = (args) => ({
  components: { DisplayTitleComponent },
  setup() {
    return { args };
  },
  template: '<display-title-component v-bind="args"/>',
});
DisplayTitle.storyName = 'DisplayTitle';
