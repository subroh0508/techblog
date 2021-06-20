import TagbarComponent from '@components/atoms/Tagbar';

export default {
  title: 'Components/atoms/Tagbar',
  component: TagbarComponent,
}

export const Tagbar = (args) => ({
  components: { TagbarComponent },
  setup() {
    return { args }
  },
  template: '<tagbar-component v-bind="args"/>',
});
Tagbar.args = {
  tags: ['Android', 'Kotlin', '怪文書'],
  onClick: (name) => console.log(`${name} is clicked!`),
};
