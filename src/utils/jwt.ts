import jwt, { Secret } from "jsonwebtoken";
import {
  jwtExpiration,
  jwtRefreshTokenExpiration,
  jwtRefreshTokenSecret,
  jwtSecret,
} from "../configs";

export const createJWT = ({ payload }: any) => {
  const token = jwt.sign(payload, jwtSecret as Secret, {
    expiresIn: jwtExpiration,
  });

  return token;
};

export const createRefreshTokenJWT = ({ payload }: any) => {
  const refreshToken = jwt.sign(payload, jwtRefreshTokenSecret as Secret, {
    expiresIn: jwtRefreshTokenExpiration,
  });

  return refreshToken;
};

export const isTokenValid = ({ token }: any) =>
  jwt.verify(token, jwtSecret as Secret);

export const isRefreshTokenValid = ({ token }: any) =>
  jwt.verify(token, jwtRefreshTokenSecret as Secret);
