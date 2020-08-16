import fs from 'fs';
import path from 'path';

import md2json from './md2json';

const fsp = fs.promises;
const jsonModule = json => `module.exports=${JSON.stringify(json)}`;

const build = async () => {
  const buildDir = path.resolve(__dirname, '../build');
  const articlesDir = path.resolve(buildDir, 'articles');
  const mdSrcDir = path.resolve(__dirname, '../../../articles');

  try {
    await fsp.access(articlesDir);
  } catch (e) {
    fs.mkdirSync(articlesDir, { recursive: true });
  }

  const files = await fsp.readdir(mdSrcDir);
  const mdFiles = files.filter(
    file => fs.statSync(path.resolve(mdSrcDir, file)).isFile() && /\.md$/.test(file)
  );
  const articles = await Promise.all(
    mdFiles.map(file => md2json(path.resolve(mdSrcDir, file)))
  );

  await fsp.writeFile(
    path.resolve(buildDir, 'list.js'),
    jsonModule(
      articles.map(article => Object.assign({}, article, { body: undefined }))
    )
  );

  await Promise.all(
    articles.map(
      article => fsp.writeFile(
        path.resolve(articlesDir, `${article.title}.js`),
        jsonModule(article)
      )
    )
  );
};

build()
  .then(() => console.log('completed!'))
  .catch(e => {
    console.error(e);

    return process.exit(1);
  });
