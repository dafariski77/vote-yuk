import { ErrorRequestHandler } from "express";

type ICustomError = {
  statusCode: number;
  message: string;
};

const errorHandlerMiddleware: ErrorRequestHandler = (err, req, res, next) => {
  console.log("Error");
  console.log(err.message);

  let customError: ICustomError = {
    statusCode: err.statusCode || 500,
    message: err.message || "Something went wrong try again later",
  };

  return res.status(customError.statusCode).json({
    message: customError.message,
  });
};

export default errorHandlerMiddleware;
