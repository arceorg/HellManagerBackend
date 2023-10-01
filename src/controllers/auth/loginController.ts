import { NextFunction, Request, Response } from "express";

export const loginController = [
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      res.json({message: "The authentication pass"});
    } catch (error) {
      next(error);
    }
  },
];
