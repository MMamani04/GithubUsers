import {IPartialUser, IUser} from '@models/user';

const config = {
  headers: {Authentication: 'Bearer [TOKEN]'},
};

export const fetchUsers = async (): Promise<IPartialUser[]> => {
  return fetch('https://api.github.com/users', config)
    .then(async response => {
      const users = await response.json();
      return users.slice(0, 5).map(
        (user: any): IPartialUser => ({
          username: user.login,
        }),
      );
    })
    .catch(() => {
      return [];
    });
};

export const fetchUser = (username: string): Promise<IUser> => {
  return fetch(`https://api.github.com/users/${username}`, config).then(
    async response => {
      const user = await response.json();
      return {
        username: user.login,
        avatarUrl: user.avatar_url,
        name: user.name,
        location: user.location,
      };
    },
  );
};
