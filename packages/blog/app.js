import Vue from 'vue';
import { sync } from 'vuex-router-sync';

import { createRouter } from './router';
import { createStore } from './components/store';
import App from './components/App';
import NotFound from './components/pages/global/NotFound';

Vue.component('not-found', NotFound);

export const createApp = () => {
  const router = createRouter();
  const store = createStore();

  sync(store, router);

  const app = new Vue({
    router,
    store,
    render: h => h(App),
  });

  return { app, router, store };
};
