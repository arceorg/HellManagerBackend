import { NextFunction, Request, Response } from "express";
import { getStudentInteractor } from "../../interactors/student/getStudentInteractor";

export const getStudentController = [
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { message, data } = await getStudentInteractor(req.params.studentId);
      res.status(200).json({ message, data });
    } catch (error) {
      next(error);
    }
  },
];
