import fs from 'fs';
import path from 'path';
import sizeof from 'image-size';
import sharp from 'sharp';

const fsp = fs.promises;

const MAX_SIZE = { width: 800, height: 600 };

export default async filename => {
  const imageDir = path.resolve(__dirname, '../../../articles/images');
  const thumbsDir = path.resolve(__dirname, '../../../articles/thumbs');
  const imagePath = path.resolve(imageDir, filename);

  const originalSize = await sizeof(imagePath);

  if (!requireDownsize(originalSize, MAX_SIZE))  {
    return;
  }

  const size = calcSize(originalSize);
  await downsize(filename, imagePath, thumbsDir, size);
  await convert(filename, imagePath, imageDir);
};

const EXT_PNG = '.png';
const EXT_WEBP = '.webp';

const isPNG = filename => filename.endsWith(EXT_PNG)

const convert = async (filename, imagePath, imageDir) => {
  if (!isPNG(filename)) {
    return;
  }

  await sharp(imagePath)
    .webp({ lossless: true })
    .toFile(path.resolve(imageDir, filename.replace(EXT_PNG, EXT_WEBP)));

  await fsp.unlink(imagePath);
}

const downsize = async (filename, imagePath, thumbsDir, size) => {
  if (isPNG(filename)) {
    await sharp(imagePath)
      .resize(size.width, size.height)
      .webp({ lossless: true })
      .toFile(path.resolve(thumbsDir, filename.replace(EXT_PNG, EXT_WEBP)));
  } else {
    await sharp(imagePath)
      .resize(size.width, size.height)
      .toFile(path.resolve(thumbsDir, filename));
  }
}

const calcSize = (size, maxSize = MAX_SIZE) => {
  const downsized = size.width < size.height ? downsizeByHeight(size, maxSize) : downsizeByWidth(size, maxSize);

  if (!requireDownsize(downsized, maxSize))  {
    return downsized;
  }

  return size.width < size.height ? downsizeByWidth(downsized, maxSize) : downsizeByHeight(downsized, maxSize);
}

const requireDownsize = (size, maxSize) =>
  maxSize.width / size.width < 1.0 || maxSize.height / size.height < 1.0;

const downsizeByWidth = (size, maxSize) => {
  const scale = maxSize.width / size.width;
  return { width: Math.round(size.width * scale), height: Math.round(size.height * scale) };
};

const downsizeByHeight = (size, maxSize) => {
  const scale = maxSize.height / size.height;
  return { width: Math.round(size.width * scale), height: Math.round(size.height * scale) };
};
