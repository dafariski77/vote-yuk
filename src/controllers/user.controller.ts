import { NextFunction, Request, Response } from "express";
import {
  createOneUser,
  deleteUser,
  editUser,
  getAllUser,
  getOneUser,
} from "../services/user.service";
import { IShowRequest, IUserRequest } from "../interfaces/user.interface";

export const index = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const users = await getAllUser();

    return res.status(200).json({
      data: users,
    });
  } catch (err) {
    next(err);
  }
};

export const insert = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const user = await createOneUser(req);

    return res.status(201).json({
      data: user,
    });
  } catch (err) {
    next(err);
  }
};

export const show = async (
  req: Request<IShowRequest>,
  res: Response,
  next: NextFunction
) => {
  try {
    const user = await getOneUser(req);

    return res.status(200).json({
      data: user,
    });
  } catch (err) {
    next(err);
  }
};

export const update = async (
  req: Request<IUserRequest>,
  res: Response,
  next: NextFunction
) => {
  try {
    const user = await editUser(req);

    return res.status(200).json({
      data: user,
    });
  } catch (err) {
    next(err);
  }
};

export const destroy = async (
  req: Request<IShowRequest>,
  res: Response,
  next: NextFunction
) => {
  try {
    const user = await deleteUser(req);

    return res.status(200).json({
      data: user,
    });
  } catch (err) {
    next(err);
  }
};
