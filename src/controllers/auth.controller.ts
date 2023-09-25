import { NextFunction, Request, Response, response } from "express";
import { registerUser } from "../services/auth.service";

type IRegister = {
  username: string;
  name: string;
  password: string;
  confirmPassword: string;
};

export const register = async (
  req: Request<IRegister>,
  res: Response,
  next: NextFunction
) => {
  try {
    const user = await registerUser(req);

    return res.status(201).json({
      data: user,
    });
  } catch (err) {
    next(err);
  }
};
