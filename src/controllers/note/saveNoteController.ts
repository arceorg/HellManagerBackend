import { NextFunction, Request, Response } from "express";
import { saveNoteInteractor } from "../../interactors/note/saveNoteInteractor";

export const saveNoteController = [
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { message, data } = await saveNoteInteractor(req.body);
      res.status(201).json({ message, data });
    } catch (error) {
      next(error);
    }
  },
];
