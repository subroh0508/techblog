import NavMenuComponent from '@components/atoms/NavMenu';

export default {
  title: 'Components/atoms/NavMenu',
  component: NavMenuComponent,
  argTypes: {
    manuList: {
      control: { type: 'array' },
    },
    onClick: { action: 'clicked' },
  }
}

export const NavMenu = (args) => ({
  components: { NavMenuComponent },
  setup() {
    return { args };
  },
  template: '<nav-menu-component v-bind="args"/>',
});
NavMenu.args = {
  menuList: [
    { name: 'articles', display: 'Articles' },
    { name: 'about', display: 'About' },
  ],
};
NavMenu.storyName = 'NavMenu';
