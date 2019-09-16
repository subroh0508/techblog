import Vue from 'vue';

import router from './router';
import App from './components/App';
import NotFound from './components/pages/global/NotFound';

Vue.component('not-found', NotFound);

new Vue({
  router,
  el: '#app',
  components: { App },
  template: '<app/>',
});
