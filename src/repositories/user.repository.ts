import { IDataUser } from "../interfaces/user.interface";
import prisma from "../utils/prisma";

export const insertUser = async (data: IDataUser) => {
  return await prisma.user.create({
    data,
    select: {
      id: true,
      name: true,
      username: true,
      createdAt: true,
      updatedAt: true,
    },
  });
};

export const findAllUser = async () => {
  return await prisma.user.findMany({
    select: {
      id: true,
      name: true,
      username: true,
      createdAt: true,
      updatedAt: true,
    },
  });
};

export const findOneUser = async (id?: number) => {
  return await prisma.user.findUniqueOrThrow({
    where: {
      id,
    },
    select: {
      id: true,
      name: true,
      username: true,
      createdAt: true,
      updatedAt: true,
    },
  });
};

export const deleteOneUser = async (id?: number) => {
  return await prisma.user.delete({
    where: {
      id,
    },
    select: {
      id: true,
      name: true,
      username: true,
      createdAt: true,
      updatedAt: true,
    },
  });
};

export const updateOneUser = async (id: number, data: IDataUser) => {
  return await prisma.user.update({
    where: {
      id,
    },
    data,
    select: {
      id: true,
      name: true,
      username: true,
      createdAt: true,
      updatedAt: true,
    },
  });
};
