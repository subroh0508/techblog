import '!style-loader!css-loader!sass-loader!@components/_global.scss';

import { app } from '@storybook/vue3';
import mockRouter from '@mock/router';
import mockStore from '@mock/store';

app.use(mockRouter);
app.use(mockStore);
