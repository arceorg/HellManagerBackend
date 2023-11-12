import { NextFunction, Request, Response } from "express";
import { getStudentNotesInteractor } from "../../interactors/noteStudent/getStudentNotesInteractor";

export const getStudentNotesController = [
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const studentId = req.params.studentId;
      const { message, data } = await getStudentNotesInteractor(studentId);
      res.status(200).json({ message, data });
    } catch (error) {
      next(error);
    }
  },
];
