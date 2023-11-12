import { NextFunction, Request, Response } from "express";
import { saveCareerInteractor } from "../../interactors/career/saveCareerInteractor";

export const saveCareerController = [
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { message, data } = await saveCareerInteractor(req.body);
      res.status(201).json({ message, data });
    } catch (err) {
      next(err);
    }
  },
];
