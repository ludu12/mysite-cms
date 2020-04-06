export const initializeData = async keystone => {
  // Count existing users
  const { data } = await keystone.executeQuery(
    'query { _allUsersMeta { count } }'
  );
  if (data._allUsersMeta.count === 0) {
    const password = 'password';
    const email = 'admin@example.com';

    await keystone.executeQuery(
      `mutation initialUser($password: String, $email: String) {
            createUser(data: {name: "Admin", email: $email, isAdmin: true, password: $password}) {
              id
            }
          }`,
      {
        variables: {
          password,
          email,
        },
      }
    );

    // eslint-disable-next-line no-console
    console.log(
      `\nUser created: email: ${email} password: ${password} Please change these details after initial login.`
    );

    const INITIAL_POST = `mutation initialPost($title: String, $state: PostStateType) {
            createPost(data: {title: $title, state: $state}) {
              id
            }
          }`;

    for (let i = 0; i < 3; i++) {
      const result = await keystone.executeQuery(INITIAL_POST, {
        variables: {
          title: 'Post' + i,
          state: i % 2 ? 'draft' : 'published',
        },
      });

      // eslint-disable-next-line no-console
      console.log(`\nPost created with id ${result.data.createPost.id}`);
    }
  }
};
