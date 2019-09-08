import { promises } from 'fs';
import fm from 'front-matter';

import parseMd from './parseMd';

export default async path => {
  const [content, fileMeta] = await Promise.all([promises.readFile(path, 'utf8'), promises.stat(path)]);

  const frontMatter = fm(content);
  const {
    publishedAt = fileMeta.birthtime.toISOString(),
    updatedAt = fileMeta.mtime.toISOString(),
    author = 'subroh_0508',
  } = frontMatter.attributes;

  return Object.assign({}, frontMatter.attributes, {
    publishedAt: new Date(publishedAt).toISOString(),
    updatedAt: new Date(updatedAt).toISOString(),
    author,
    body: parseMd(frontMatter.body),
  });
};
