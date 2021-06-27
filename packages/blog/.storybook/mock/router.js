import { createRouter, createWebHistory } from 'vue-router';
import { action } from '@storybook/addon-actions';

const Home = { template: '<div>Home</div>' };
const Articles = { template: '<div>Articles</div>' };
const Article = { template: '<div>Article</div>' };
const About = { template: '<div>About</div>' };
const NotFound = { template: '<div>NotFound</div>' };

const mockRouter = createRouter(
  {
    history: createWebHistory(),
    routes: [
      { path: '/', name: 'home', component: Home },
      { path: '/articles', name: 'articles', component: Articles },
      { path: '/articles/:title', name: 'article', component: Article },
      { path: '/about', name: 'about', component: About },
      { path: '/:catchAll(.*)', component: NotFound },
    ]
  },
);

const originalReplace = mockRouter.replace.bind(mockRouter);
const originalPush = mockRouter.push.bind(mockRouter);

mockRouter.replace = (location, success, abort) => {
  action('router.replace')(location);
  originalReplace(location, success, abort);
}
mockRouter.push = (location, success, abort) => {
  action('router.push')(location);
  originalPush(location, success, abort)
}

export default mockRouter;
