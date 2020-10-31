import { createSSRApp } from './app';

export default () => {
  return new Promise((resolve, reject) => {
    const { app, router } = createSSRApp();

    resolve(app);
    /*
    router.isReady().then(() => {
      resolve(app);
    });
    */
  });
};
