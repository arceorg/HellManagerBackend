import { NextFunction, Request, Response } from "express";
import { saveSubjectInteractor } from "../../interactors/subject/saveSubjectInteractor";

export const saveSubjectController = [
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { message, data } = await saveSubjectInteractor(req.body);
      res.status(201).json({ message, data });
    } catch (error) {
      next(error);
    }
  },
];
