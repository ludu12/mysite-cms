import { Checkbox, Password, Relationship, Text } from '@keystonejs/fields';

const userIsAdmin = ({ authentication: { item: user } }) =>
  Boolean(user && user.isAdmin);
const userOwnsItem = ({ authentication: { item: user } }) => {
  if (!user) {
    return false;
  }
  return { id: user.id };
};

const userIsAdminOrOwner = auth => {
  const isAdmin = userIsAdmin(auth);
  const isOwner = userOwnsItem(auth);
  return isAdmin ? isAdmin : isOwner;
};

const access = { userIsAdmin, userOwnsItem, userIsAdminOrOwner };

export const UserSchema = {
  schemaDoc: 'User information',
  labelField: 'name',
  fields: {
    name: { type: Text, isRequired: true },
    email: { type: Text, isUnique: true },
    isAdmin: { type: Checkbox },
    password: { type: Password, isRequired: true },
    posts: { type: Relationship, ref: 'Post.author', many: true },
    projects: { type: Relationship, ref: 'Project.user', many: true },
  },
  access: {
    read: access.userIsAdminOrOwner,
    update: access.userIsAdminOrOwner,
    create: access.userIsAdmin,
    delete: access.userIsAdmin,
    auth: true,
  },
};
