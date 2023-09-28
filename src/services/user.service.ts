import { Request } from "express";
import {
  deleteOneUser,
  findAllUser,
  findOneUser,
  insertUser,
  updateOneUser,
} from "../repositories/user.repository";
import BadRequestError from "../errors/bad-request";
import hashPassword from "../utils/hash";
import { IShowRequest, IUserRequest } from "../interfaces/user.interface";

export const getOneUser = async (req: Request<IShowRequest>) => {
  const { id } = req.params;

  return await findOneUser(parseInt(id));
};

export const getAllUser = async () => {
  return await findAllUser();
};

export const createOneUser = async (req: Request) => {
  const { username, name, password } = req.body;

  if (!(username || name || password)) {
    throw new BadRequestError("Some field are missing!");
  }

  // hash password
  const hashedPassword = await hashPassword(password);

  const user = await insertUser({ username, name, password: hashedPassword });

  return user;
};

export const deleteUser = async (req: Request<IShowRequest>) => {
  const { id } = req.params;

  return await deleteOneUser(parseInt(id));
};

export const editUser = async (req: Request<IUserRequest>) => {
  const { id } = req.params;

  return await updateOneUser(parseInt(id), req.body);
};
