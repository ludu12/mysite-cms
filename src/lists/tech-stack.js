import { Select, Text } from '@keystonejs/fields';

export const TechStackSchema = {
  schemaDoc: 'Tech stacks categories',
  labelField: 'name',
  fields: {
    name: { type: Text, isRequired: true, isUnique: true },
    type: { type: Select, isRequired: true, options: 'language, framework, platform, hosting, tool' }
  },
};
