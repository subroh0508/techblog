import XmlBuilder from 'xmlbuilder';
import moment from 'moment-timezone';
import fs from 'fs';
import path from 'path';

import list from '@techblog/articles/build/list';

const fsp = fs.promises;

const build = async () => {
  const buildDir = path.resolve(__dirname, '../assets');

  let builder = XmlBuilder.create('urlset', { encoding: 'utf-8' })
    .att('xmlns', 'http://www.sitemaps.org/schemas/sitemap/0.9');

  list.forEach((article) => {
    builder = builder.ele('url')
      .ele('loc', `https://subroh0508.net/articles/${article.title}`).up()
      .ele('lastmod', moment.tz(article.updatedAt, 'Asia/Tokyo').format()).up()
    .up();
  });

  ['/', '/articles', '/about'].forEach((path) => {
    builder = builder.ele('url')
      .ele('loc', `https://subroh0508.net${path}`).up()
    .up();
  });

  await fsp.writeFile(
    path.resolve(buildDir, 'sitemap.xml'),
    builder.end({ pretty: true }),
  );

  await fsp.writeFile(
    path.resolve(buildDir, 'robots.txt'),
    "User-agent: *\nAllow: /\n\nSitemap: https://subroh0508.net/sitemap.xml\n",
  );
};

build().catch(e => {
  console.error(e);

  return process.exit(1);
});
