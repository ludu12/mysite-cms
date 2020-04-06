import {
  CloudinaryImage,
  DateTime,
  Relationship,
  Select,
  Text,
} from '@keystonejs/fields';
import { CloudinaryAdapter } from '@keystonejs/file-adapters';
import { Wysiwyg } from '@keystonejs/fields-wysiwyg-tinymce';

require('dotenv').config();

const cloudinaryAdapter = new CloudinaryAdapter({
  cloudName: process.env.CLOUDINARY_CLOUD_NAME,
  apiKey: process.env.CLOUDINARY_KEY,
  apiSecret: process.env.CLOUDINARY_SECRET,
  folder: 'my-keystone-app',
});

export const PostSchema = {
  schemaDoc: 'Posts created by users',
  fields: {
    title: { type: Text, isRequired: true },
    state: { type: Select, options: 'draft, published, archived' },
    author: { type: Relationship, ref: 'User.posts' },
    publishedDate: {
      type: DateTime,
      format: 'MM/DD/YYYY h:mm A',
      yearPickerType: 'auto',
    },
    image: { type: CloudinaryImage, adapter: cloudinaryAdapter },
    brief: { type: Wysiwyg, height: 150 },
    extended: { type: Wysiwyg, height: 400 },
    categories: { type: Relationship, ref: 'PostCategory', many: true },
  },
};
