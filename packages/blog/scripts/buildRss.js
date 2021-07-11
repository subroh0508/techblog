import XmlBuilder from 'xmlbuilder';
import moment from 'moment-timezone';
import fs from 'fs';
import path from 'path';

import list from '@techblog/articles/build/list';

const TIME_ZOME = 'Asia/Tokyo';
const FORMAT = 'ddd, DD MMM YYYY HH:mm:ss';
const SITE_NAME = '横須賀第283管区情報局';
const fsp = fs.promises;

const build = async () => {
  const buildDir = path.resolve(__dirname, '../assets');

  let builder = XmlBuilder.create('rss', { encoding: 'utf-8' })
    .att('version', '2.0')
      .ele('channel')
        .ele('title', SITE_NAME).up()
        .ele('description', 'Subroh Nishikoriの技術ブログ').up()
        .ele('link', 'https://subroh0508.net/').up()
        .ele('language', 'ja').up()
        .ele('pubDate', moment.tz('2019-10-02T00:35:00.000+09:00', TIME_ZOME).format(FORMAT)).up()
        .ele('lastBuildDate', moment.tz('2019-10-05T12:35:00.000+09:00', TIME_ZOME).format(FORMAT)).up()
        .ele('docs', 'https://subroh0508.net/rss.xml').up()
        .ele('generator', 'Visual Studio Code').up()
        .ele('managingEditor', 'subroh.0508@gmail.com').up()
        .ele('webMaster', 'subroh.0508@gmail.com').up()

  list.forEach((article) => {
    builder = builder.ele('item')
      .ele('title', article.displayTitle).up()
      .ele('link', `https://subroh0508.net/articles/${article.title}`).up()
      .ele('description', article.description).up()
      .ele('pubDate', moment.tz(article.updatedAt, TIME_ZOME).format(FORMAT)).up()
      .ele('guid', article.title).up()
    .up();
  });

  [
    { path:'/', id: 'home', title: SITE_NAME, description: 'Subroh Nishikoriの技術ブログ' },
    { path: '/articles', id: 'articles', title: `全ての記事 - ${SITE_NAME}`, description: '全ての記事' },
    { path: '/about', id: 'about', title: `このサイトについて - ${SITE_NAME}`, description: 'このサイトや筆者について' },
  ].forEach(({ path, id, title, description }) => {
    builder = builder.ele('item')
      .ele('title', title).up()
      .ele('link', `https://subroh0508.net${path}`).up()
      .ele('description', description).up()
      .ele('guid', id).up()
    .up();
  });

  builder.up();

  await fsp.writeFile(
    path.resolve(buildDir, 'rss.xml'),
    builder.end({ pretty: true }),
  );
};

build().catch(e => {
  console.error(e);

  return process.exit(1);
});
