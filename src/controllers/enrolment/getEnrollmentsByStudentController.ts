import { NextFunction, Request, Response } from "express";
import { getEnrollmentsByStudentInteractor } from "../../interactors/enrollment/getEnrollmentsByStudentInteractor";

export const getEnrollmentsByStudentController = [
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const studentId = req.params.studentId;
      const { message, data } = await getEnrollmentsByStudentInteractor(studentId);
      res.status(200).json({ message, data });
    } catch (error) {
      next(error);
    }
  },
];
