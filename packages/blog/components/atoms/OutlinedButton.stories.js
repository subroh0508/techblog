import OutlinedButtonComponent from '@components/atoms/OutlinedButton';

export default {
  title: 'Components/atoms/OutlinedButton',
  component: OutlinedButtonComponent,
  argTypes: {
    default: {
      defaultValue: 'Read More >>',
      control: { type: 'text' },
    },
    onClick: { action: 'clicked' },
  }
}

export const OutlinedButton = (args) => ({
  components: { OutlinedButtonComponent },
  setup() {
    return { args };
  },
  template: `
    <outlined-button-component v-bind="args">
      {{ args.default }}
    </outlined-button-component>
    `,
});
OutlinedButton.storyName = 'OutlinedButton';
