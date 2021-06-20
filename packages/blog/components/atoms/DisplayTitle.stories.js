import DisplayTitle from '@components/atoms/DisplayTitle';

export default {
  title: 'Components/atoms/DisplayTitle',
  component: DisplayTitle,
}

const Template = (args) => ({
  components: { DisplayTitle },
  setup() {
    return { args }
  },
  template: '<display-title v-bind="args"/>',
});

export const TextDisplayTitle = Template.bind({});
TextDisplayTitle.args = { className: 'text', value: '記事タイトル', onClick: () => console.log('clicked!') };

export const LinkDisplayTitle = Template.bind({});
LinkDisplayTitle.args = { className: 'link', value: '記事タイトル', onClick: () => console.log('clicked!') };
