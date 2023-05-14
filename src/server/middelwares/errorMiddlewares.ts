import createDebug from "debug";

import CustomError from "../CustomError.js";
import { type Request, type NextFunction, type Response } from "express";

const debugErrorMiddlewares = createDebug(
  "robots-api:server:middlewares:errorMiddlewares"
);

export const notFoundError = (
  _req: Request,
  res: Response,
  next: NextFunction
) => {
  const error = new CustomError(404, "Endpoint not found");

  next(error);
};

export const generalErrorMiddleware = (
  error: CustomError,
  req: Request,
  res: Response,
  _next: NextFunction
) => {
  debugErrorMiddlewares("GENERAL ERROR MIDDLEWARE ERROR");
  const statusCode = error.statusCode || 500;
  const message = error.statusCode ? error.message : "Total error";

  res.status(statusCode).json({ message });
};

export default generalErrorMiddleware;
