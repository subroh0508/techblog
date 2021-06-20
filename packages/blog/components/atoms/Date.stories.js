import DateComponent from '@components/atoms/Date';

export default {
  title: 'Components/atoms/Date',
  component: DateComponent,
}

const Template = (args) => ({
  components: { DateComponent },
  setup() {
    return { args }
  },
  template: '<date-component v-bind="args"/>',
});

export const TitleDate = Template.bind({});
TitleDate.args = { className: 'title', value: new Date() };

export const SubtitleDate = Template.bind({});
SubtitleDate.args = { className: 'subtitle', value: new Date() };

export const TextDate = Template.bind({});
TextDate.args = { className: 'text', value: new Date() };
