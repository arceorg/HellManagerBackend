import { NextFunction, Request, Response } from "express";

export const saveSubjectController = [
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      await saveSubjectInteractor(req.body);
    } catch (error) {
      next(error);
    }
  },
];
