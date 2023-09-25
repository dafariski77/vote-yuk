import prisma from "../utils/prisma";

type ICreateUser = {
  username: string;
  name: string;
  password: string;
};

export const insertUser = async (data: ICreateUser) => {
  const { username, name, password } = data;

  return await prisma.user.create({
    data: {
      username,
      name,
      password,
    },
  });
};
