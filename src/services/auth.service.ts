import { Request, Response } from "express";
import BadRequestError from "../errors/bad-request";
import hashPassword from "../utils/hash";
import { insertUser } from "../repositories/user.repository";

type IRegister = {
  username: string;
  name: string;
  password: string;
  confirmPassword: string;
};

export const registerUser = async (req: Request<IRegister>) => {
  const { username, name, password, confirmPassword } = req.body;

  if (!(username || name || password || confirmPassword)) {
    throw new BadRequestError("Some field are missing!");
  }

  // validate password
  if (password !== confirmPassword) {
    throw new BadRequestError("Password and Confirm Password does not match!");
  }

  // hash password
  const hashedPassword = await hashPassword(password);

  const user = await insertUser({ username, name, password: hashedPassword });

  return user;
};
