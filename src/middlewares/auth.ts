import { NextFunction, Request, Response } from "express";
import UnauthenticatedError from "../errors/unauthenticated";
import { isTokenValid } from "../utils/jwt";
import { JwtPayload } from "jsonwebtoken";

declare global {
  namespace Express {
    interface Request {
      user?: JwtPayload;
    }
  }
}

export const authenticateUser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    let token: string | undefined;

    const authHeader = req.headers.authorization;

    if (authHeader && authHeader.startsWith("Bearer")) {
      token = authHeader.split(" ")[1];
    }

    if (!token) {
      throw new UnauthenticatedError("Unauthenticated");
    }

    const payload: JwtPayload | string = isTokenValid(token);

    if (typeof payload == "string") {
      throw new UnauthenticatedError("Invalid Token!");
    }

    req.user = {
      username: payload.username,
      role: payload.role,
      name: payload.name,
      id: payload.id,
    };

    next();
  } catch (err) {
    next(err);
  }
};
