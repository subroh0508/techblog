import Vue from 'vue';

import router from './router';
import App from './components/App';

new Vue({
  router,
  el: '#app',
  components: { App },
  template: '<app/>',
});
