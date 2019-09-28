import Vue from 'vue';

import { createRouter } from './router';
import App from './components/App';
import NotFound from './components/pages/global/NotFound';

Vue.component('not-found', NotFound);

export const createApp = () => {
  const router = createRouter();

  const app = new Vue({
    router,
    render: h => h(App),
  });

  return { app, router };
};
