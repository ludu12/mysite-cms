import { CloudinaryImage, DateTime, Relationship, Select, Text } from '@keystonejs/fields';
import { Wysiwyg } from '@keystonejs/fields-wysiwyg-tinymce';
import { Cloudinary } from '../adapters/cloudinary';

export const PostSchema = {
  schemaDoc: 'Posts created by users',
  labelField: 'title',
  fields: {
    title: { type: Text, isRequired: true },
    state: { type: Select, options: 'draft, published, archived' },
    author: { type: Relationship, ref: 'User.posts' },
    publishedDate: {
      type: DateTime,
      format: 'MM/DD/YYYY h:mm A',
      yearPickerType: 'auto',
    },
    images: { type: Relationship, ref: 'Image', many: true },
    brief: { type: Wysiwyg, height: 150 },
    extended: { type: Wysiwyg, height: 400 },
    categories: { type: Relationship, ref: 'PostCategory', many: true },
  },
};
