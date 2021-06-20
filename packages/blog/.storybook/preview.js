import { app } from '@storybook/vue3';
import { createRouter, createWebHistory } from 'vue-router';

app.use(createRouter(
  {
    history: createWebHistory(),
    routes: [
      { path: '/', name: 'home' },
      { path: '/articles', name: 'articles' },
      { path: '/articles/:title', name: 'article' },
      { path: '/about', name: 'about' },
    ]
  }
));
