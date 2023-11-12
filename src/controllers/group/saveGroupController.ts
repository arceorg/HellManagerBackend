import { NextFunction, Request, Response } from "express";
import { saveGroupInteractor } from "../../interactors/group/saveGroupInteractor";

export const saveGroupController = [
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { message, data } = await saveGroupInteractor(req.body);
      res.status(201).json({ message, data });
    } catch (error) {
      next(error);
    }
  },
];
