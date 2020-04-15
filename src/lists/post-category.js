import { Text } from '@keystonejs/fields';

export const PostCategorySchema = {
  schemaDoc: 'Posts categories',
  labelField: 'name',
  fields: {
    name: { type: Text, isRequired: true, isUnique: true },
  },
};
