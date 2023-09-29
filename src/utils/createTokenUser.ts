interface IUser {
  id: number;
  username: string;
  name: string;
  role: string;
}

export const createTokenUser = (user: IUser) => {
  return {
    id: user.id,
    username: user.username,
    name: user.name,
    role: user.role,
  };
};
