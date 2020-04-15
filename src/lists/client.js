import { Relationship, Text } from '@keystonejs/fields';

export const ClientSchema = {
  schemaDoc: 'Client information',
  labelField: 'name',
  fields: {
    name: { type: Text, isRequired: true, isUnique: true },
    logo: { type: Relationship, ref: 'Image' },
    state: { type: Text },
    city: { type: Text },
  },
};
