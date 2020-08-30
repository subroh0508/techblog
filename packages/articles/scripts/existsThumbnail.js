import fs from 'fs';
import path from 'path';

export default filename => {
  const thumbnail = path.resolve(__dirname, `../../../articles/thumbs/${filename}`);

  try {
    fs.accessSync(thumbnail);
    return true;
  } catch (e) {
    return false;
  }
};
