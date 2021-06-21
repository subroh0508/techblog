import DateComponent from '@components/atoms/Date';

export default {
  title: 'Components/atoms/DateLabel',
  component: DateComponent,
  argTypes: {
    className: {
      options: ['title', 'subtitle', 'text'],
      control: { type: 'radio' },
    },
    value: {
      defaultValue: new Date(),
      control: { type: 'date' },
    },
  }
}

export const DateLabel = (args) => ({
  components: { DateComponent },
  setup() {
    if (typeof args.value === 'number') {
      return { args: { ...args, value: new Date(args.value) } };
    }

    return { args };
  },
  template: '<date-component v-bind="args"/>',
});
DateLabel.storyName = 'DateLabel';
