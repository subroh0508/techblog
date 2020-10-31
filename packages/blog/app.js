import { h, createApp as createClientVueApp, createSSRApp as createSSRVueApp } from 'vue';
import { sync } from 'vuex-router-sync';

import { createClientRouter, createSSRRouter } from './router';
import { createStore } from './components/store';
import App from './components/App';
import NotFound from './components/pages/global/NotFound';

const createApp = (createVueApp, createRouter) => {
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
}

export const createClientApp = () => createApp(createClientVueApp, createClientRouter);
export const createSSRApp = () => createApp(createSSRVueApp, createSSRRouter)
