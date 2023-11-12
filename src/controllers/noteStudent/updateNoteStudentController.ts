import { NextFunction, Request, Response } from "express";
import { updateNoteStudentInteractor } from "../../interactors/noteStudent/updateNoteStudentInteractor";

export const updateNoteStudentController = [
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const noteStudentId = req.params.noteStudentId;
      const { message, data } = await updateNoteStudentInteractor(req.body, noteStudentId);
      res.status(200).json({ message, data });
    } catch (error) {
      next(error);
    }
  },
];
