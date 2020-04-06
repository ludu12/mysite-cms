import { Text } from '@keystonejs/fields';

export const PostCategorySchema = {
  schemaDoc: 'Posts categories',
  fields: {
    name: { type: Text, isRequired: true, isUnique: true },
  },
};
