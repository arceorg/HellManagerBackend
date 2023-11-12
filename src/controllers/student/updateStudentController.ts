import { NextFunction, Request, Response } from "express";
import { updateStudentInteractor } from "../../interactors/student/updateStudentInteractor";

export const updateStudentController = [
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const studentId = req.params.studentId;
      const { message, data } = await updateStudentInteractor(req.body, studentId);
      res.status(200).json({ message, data });
    } catch (error) {
      next(error);
    }
  },
];
