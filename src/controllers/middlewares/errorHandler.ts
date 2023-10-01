import { NextFunction, Request, Response } from "express";

export const errorHandler = (err: any, _: Request, res: Response, __: NextFunction) => {
  res.status((err.isBoom ? err.output.statusCode : err.httpCode) || 500).json({ error: err.message, success: false });
};
