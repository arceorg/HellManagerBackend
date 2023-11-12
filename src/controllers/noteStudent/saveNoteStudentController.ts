import { NextFunction, Request, Response } from "express";
import { saveNoteStudentInteractor } from "../../interactors/noteStudent/saveNoteStudentInteractor";

export const saveNoteStudentController = [
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { message, data } = await saveNoteStudentInteractor(req.body);
      res.status(201).json({ message, data });
    } catch (error) {
      next(error);
    }
  },
];
