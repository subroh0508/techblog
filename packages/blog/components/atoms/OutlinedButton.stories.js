import OutlinedButtonComponent from '@components/atoms/OutlinedButton';

export default {
  title: 'Components/atoms/OutlinedButton',
  component: OutlinedButtonComponent,
}

export const OutlinedButton = (args) => ({
  components: { OutlinedButtonComponent },
  setup() {
    return { args };
  },
  template: `
    <outlined-button-component v-bind="args">
      Read More >>
    </outlined-button-component>
    `,
});
OutlinedButton.args = {
  onClick: () => console.log(`clicked!`),
};
