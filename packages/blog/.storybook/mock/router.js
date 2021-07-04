import { createRouter, createWebHistory } from 'vue-router';
import { action } from '@storybook/addon-actions';

const router = createRouter(
  {
    history: createWebHistory(),
    routes: [],
  },
);

router.push = action('router.push');

export const handlePushRouter = router;
