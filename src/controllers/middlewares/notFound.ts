import { NextFunction, Request, Response } from "express";

export const notFound = (_: Request, res: Response, __: NextFunction) => {
  res.status(404).json({ error: "NOT FOUND", success: false });
};
