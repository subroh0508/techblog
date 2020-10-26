import { h, createApp as createVueApp } from 'vue';
import { sync } from 'vuex-router-sync';

import { createRouter } from './router';
import { createStore } from './components/store';
import App from './components/App';
import NotFound from './components/pages/global/NotFound';

export const createApp = () => {
  const router = createRouter();
  const store = createStore();

  sync(store, router);

  const app = createVueApp({
    render: () => h(App),
  });

  app.use(router);
  app.use(store);
  app.component('not-found', NotFound);

  return { app, router, store };
};
