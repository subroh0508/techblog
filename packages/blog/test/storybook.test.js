import path from 'path';
import initStoryshots, { multiSnapshotWithOptions } from '@storybook/addon-storyshots';

initStoryshots({
  configPath: path.join(__dirname, '../.storybook'),
  test: multiSnapshotWithOptions(),
});
