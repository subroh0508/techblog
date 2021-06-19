import path from 'path';
import Module from 'module';

export const getFilename = (stats, outputPath, chunkName) => {
  const { assetsByChunkName } = stats.toJson();
  const filename = assetsByChunkName && assetsByChunkName[chunkName];

  return path.join(
    outputPath,
    Array.isArray(filename)
      ? filename.find(asset => /\.js$/.test(asset))
      : filename
  );
};

export const requireFromString = (code, filename) => {
  const parent = module.main || undefined;
  const m = new Module(filename, parent);
  m.filename = filename;
  const paths = Module._nodeModulePaths(path.dirname(filename));
  m.paths = paths;
  m._compile(code, filename);
  return m.exports;
};
