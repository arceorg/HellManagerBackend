import { NextFunction, Request, Response } from "express";

export const logger = (req: Request, _res: Response, next: NextFunction) => {
  console.log(`${new Date().toISOString()} Method: ${req.method} Path: ${req.path}`);
  next();
};
