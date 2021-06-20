import NavMenuComponent from '@components/atoms/NavMenu';

export default {
  title: 'Components/atoms/NavMenu',
  component: NavMenuComponent,
}

export const NavMenu = (args) => ({
  components: { NavMenuComponent },
  setup() {
    return { args }
  },
  template: '<nav-menu-component v-bind="args"/>',
});
NavMenu.args = {
  menuList: [
    { name: 'articles', display: 'Articles' },
    { name: 'about', display: 'About' },
  ],
  onClick: (name) => console.log(`${name} is clicked!`),
};
