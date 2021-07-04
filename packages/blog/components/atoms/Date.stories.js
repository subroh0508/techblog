import DateComponent from '@components/atoms/Date';

export default {
  title: 'Components/atoms/DateLabel',
  component: DateComponent,
  argTypes: {
    className: {
      defaultValue: 'title',
      options: ['title', 'subtitle', 'text'],
      control: { type: 'radio' },
    },
    value: {
      defaultValue: Date.parse('2020-01-01'),
      control: { type: 'date' },
    },
  }
}

export const DateLabel = (args) => ({
  components: { DateComponent },
  setup() {
    return {
      args: {
        ...args,
        value: (typeof args.value === 'number') ? new Date(args.value) : args.value,
      }
    };
  },
  template: '<date-component v-bind="args"/>',
});
DateLabel.storyName = 'DateLabel';
