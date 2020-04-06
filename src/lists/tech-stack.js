import { Text } from '@keystonejs/fields';

export const TechStackSchema = {
  schemaDoc: 'Tech stacks categories',
  fields: {
    name: { type: Text, isRequired: true, isUnique: true },
  },
};
