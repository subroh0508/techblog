import '!style-loader!css-loader!sass-loader!@components/_global.scss';

import { app } from '@storybook/vue3';
import mockRouter from '@mock/router';
import NotFound from '@components/pages/global/NotFound';

app.use(mockRouter);
app.component('not-found', NotFound);
