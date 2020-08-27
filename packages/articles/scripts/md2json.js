import { promises } from 'fs';
import fm from 'front-matter';
import moment from 'moment-timezone';

import MarkdownParser from './MarkdownParser';

const TIME_ZONE = 'Asia/Tokyo';

export default async path => {
  const [content, fileMeta] = await Promise.all([promises.readFile(path, 'utf8'), promises.stat(path)]);

  const frontMatter = fm(content);
  const {
    publishedAt = fileMeta.birthtime.toISOString(),
    updatedAt = fileMeta.mtime.toISOString(),
    author = 'subroh_0508',
    title,
  } = frontMatter.attributes;

  return Object.assign({}, frontMatter.attributes, {
    publishedAt: moment.tz(publishedAt, TIME_ZONE).format(),
    updatedAt: moment.tz(updatedAt, TIME_ZONE).format(),
    author,
    body: new MarkdownParser(title).exec(frontMatter.body),
  });
};
