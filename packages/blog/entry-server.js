import { createApp } from './app';

export default (context) => {
  return new Promise((resolve, reject) => {
    const { app, router, store } = createApp();

    router.push(context.url);

    router.isReady().then(() => {
      context.rendered = () => {
        context.state = store.state;
      };

      resolve(app);
    });
  });
};
