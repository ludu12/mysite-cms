import { Text } from '@keystonejs/fields';

export const ClientSchema = {
  schemaDoc: 'Client information',
  fields: {
    name: { type: Text, isRequired: true, isUnique: true },
    location: { type: Text },
  },
};
