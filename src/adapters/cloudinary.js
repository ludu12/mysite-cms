import { CloudinaryAdapter } from '@keystonejs/file-adapters';
require('dotenv').config();

const cloudinaryAdapter = new CloudinaryAdapter({
  cloudName: process.env.CLOUDINARY_CLOUD_NAME,
  apiKey: process.env.CLOUDINARY_KEY,
  apiSecret: process.env.CLOUDINARY_SECRET,
  folder: 'my-site',
});

export const Cloudinary = {
  cloudinaryAdapter,
};
