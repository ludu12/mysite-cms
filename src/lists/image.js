import { CloudinaryImage, Text } from '@keystonejs/fields';
import { Cloudinary } from '../adapters/cloudinary';

export const ImageSchema = {
  schemaDoc: 'Image saved in cloudinary',
  labelField: 'name',
  fields: {
    name: { type: Text, isRequired: true },
    image: { type: CloudinaryImage, adapter: Cloudinary.cloudinaryAdapter, isRequired: true },
  },
};
