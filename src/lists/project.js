import { DateTime, Relationship, Text } from '@keystonejs/fields';
import { Wysiwyg } from '@keystonejs/fields-wysiwyg-tinymce';

export const ProjectSchema = {
  schemaDoc: 'Posts created by users',
  fields: {
    title: { type: Text, isRequired: true },
    user: { type: Relationship, ref: 'User.projects' },
    client: { type: Relationship, ref: 'Client' },
    startDate: {
      type: DateTime,
      format: 'MM/DD/YYYY h:mm A',
      yearPickerType: 'auto',
    },
    endDate: {
      type: DateTime,
      format: 'MM/DD/YYYY h:mm A',
      yearPickerType: 'auto',
    },
    brief: { type: Wysiwyg, height: 150 },
    extended: { type: Wysiwyg, height: 400 },
    techStack: { type: Relationship, ref: 'TechStack', many: true },
  },
};
