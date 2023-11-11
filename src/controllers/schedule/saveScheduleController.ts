import { NextFunction, Request, Response } from "express";
import { saveScheduleInteractor } from "../../interactors/schedule/saveScheduleInteractor";

export const saveScheduleController = [
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { message, data } = await saveScheduleInteractor(req.body);
      res.status(201).json({ message, data });
    } catch (error) {
      next(error);
    }
  },
];
