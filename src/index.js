import { Keystone } from '@keystonejs/keystone';
import { GraphQLApp } from '@keystonejs/app-graphql';
import { AdminUIApp } from '@keystonejs/app-admin-ui';
import { MongooseAdapter as Adapter } from '@keystonejs/adapter-mongoose';
import { UserSchema } from './lists/user';
import { PostSchema } from './lists/post';
import { PostCategorySchema } from './lists/post-category';
import { PasswordAuthStrategy } from '@keystonejs/auth-password';
import { initializeData } from './initial-data';
import { TechStackSchema } from './lists/tech-stack';
import { ProjectSchema } from './lists/project';
import { ClientSchema } from './lists/client';

const PROJECT_NAME = 'mysite';

export const keystone = new Keystone({
  name: PROJECT_NAME,
  adapter: new Adapter(),
  onConnect: initializeData,
});

keystone.createList('User', UserSchema);
keystone.createList('PostCategory', PostCategorySchema);
keystone.createList('Post', PostSchema);
keystone.createList('Client', ClientSchema);
keystone.createList('TechStack', TechStackSchema);
keystone.createList('Project', ProjectSchema);

const authStrategy = keystone.createAuthStrategy({
  type: PasswordAuthStrategy,
  list: 'User',
});

export const apps = [
  new GraphQLApp(),
  new AdminUIApp({ enableDefaultRoute: true, authStrategy }),
];
