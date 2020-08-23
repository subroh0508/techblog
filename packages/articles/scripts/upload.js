import fs from 'fs';
import path from 'path';
import admin from 'firebase-admin';
import downsizeImage from './downsizeImage';
import serviceAccount from '../../../secrets/serviceAccount.json';

const IMAGES_BUCKET_NAME = 'images.subroh0508.net';
const THUMBS_BUCKET_NAME = 'thumbs.subroh0508.net';

const fsp = fs.promises;

const upload = async () => {
  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
  });
  
  (await forUploadingImages(path.resolve(__dirname, '../../../articles/images'), IMAGES_BUCKET_NAME)).forEach(filename => downsizeImage(filename));

  const imagesDir = path.resolve(__dirname, '../../../articles/images');
  const thumbsDir = path.resolve(__dirname, '../../../articles/thumbs');

  const images = await forUploadingImages(imagesDir, IMAGES_BUCKET_NAME);
  const thumbs = await forUploadingImages(thumbsDir, THUMBS_BUCKET_NAME);

  images.forEach(filename => uploadImages(imagesDir, filename, IMAGES_BUCKET_NAME));
  thumbs.forEach(filename => uploadImages(thumbsDir, filename, THUMBS_BUCKET_NAME));

  return { images, thumbs };
};

const forUploadingImages = async (localDir, bucketName) => {
  const bucketFiles = (await admin.storage().bucket(bucketName).getFiles())[0].map(f => f.name);
  const localFiles = await fsp.readdir(localDir);

  return localFiles.filter(f => bucketFiles.indexOf(f) === -1);
};

const uploadImages = async (localDir, filename, bucketName) =>
  await admin.storage()
    .bucket(bucketName)
    .upload(path.resolve(localDir, filename))
    .makePublic();

upload()
  .then(files => {
    console.log('completed!');

    console.log('[Images]');
    files.images.forEach(name => console.log(`- ${name}`));

    console.log('[Thumbnails]');
    files.thumbs.forEach(name => console.log(`- ${name}`));
  })
  .catch(e => {
    console.error(e);

    return process.exit(1);
  });

