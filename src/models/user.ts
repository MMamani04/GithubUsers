export interface IPartialUser {
  username: string;
}

export interface IUser extends IPartialUser {
  avatarUrl: string;
  name: string;
  location: string;
}
