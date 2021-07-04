import '!style-loader!css-loader!sass-loader!@components/_global.scss';

import { app } from '@storybook/vue3';
import { handlePushRouter } from '@mock/router';
import NotFound from '@components/pages/global/NotFound';

app.use(handlePushRouter);
app.component('not-found', NotFound);
