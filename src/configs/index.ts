import dotenv from "dotenv";

dotenv.config();

export const jwtExpiration = process.env.JWT_EXP;
export const jwtSecret: string | undefined = process.env.JWT_SECRET;
export const jwtRefreshTokenSecret = process.env.JWT_REFRESH_TOKEN_SECRET;
export const jwtRefreshTokenExpiration = process.env.JWT_REFRESH_TOKEN_EXP;
