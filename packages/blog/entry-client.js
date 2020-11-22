import { createClientApp } from './app';

const { app, router } = createClientApp();
router.isReady().then(() => {
  app.mount('#app');
});
