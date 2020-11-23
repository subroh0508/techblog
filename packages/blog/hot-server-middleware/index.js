import { getFilename, requireFromString } from './utils';

const MIDDLEWARE_NAME = 'hot-server-middleware';

const options = {
  chunkName: 'main',
}

export default compiler => {
  let renderer = undefined;
  let error = false;

  compiler.hooks.done.tap(MIDDLEWARE_NAME, stats => {
    error = false;

    if (stats.compilation.errors.length) {
      error = stats.compilation.errors;
      return;
    }

    const filename = getFilename(stats, compiler.outputPath, options.chunkName);
    const buffer = compiler.inputFileSystem.readFileSync(filename);

    try {
      renderer = requireFromString(buffer.toString(), filename).default;
    } catch (requireerror) {
      return;
    }

    if (typeof renderer !== 'function') {
      throw new Error('renderer must export a function.');
    }
  });

  return (req, res, next) => {
    if (error) {
      return next(error);
    }
    if (typeof renderer !== 'function') {
      return next(new Error('renderer is not function.'));
    }
    return renderer(req, res, next);
  };
}
