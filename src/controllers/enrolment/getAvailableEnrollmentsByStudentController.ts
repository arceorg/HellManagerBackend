import { NextFunction, Request, Response } from "express";
import { getAvailableEnrollmentsByStudentInteractor } from "../../interactors/enrollment/getAvailableEnrollmentsByStudentInteractor";

export const getAvailableEnrollmentsByStudentController = [
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const studentId = req.params.studentId;
      const { data, message } = await getAvailableEnrollmentsByStudentInteractor(studentId);
      res.status(200).json({ message, data });
    } catch (error) {
      next(error);
    }
  },
];
