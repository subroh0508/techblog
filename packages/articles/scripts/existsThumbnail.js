import fs from 'fs';
import path from 'path';

const fsp = fs.promises;

export default async filename => {
  const thumbnail = path.resolve(__dirname, `../../../articles/thumbs/${filename}`);

  try {
    await fsp.access(thumbnail);
    return true;
  } catch (e) {
    return false;
  }
};
