import { NextFunction, Request, Response } from "express";
import { saveEnrollmentInteractor } from "../../interactors/enrollment/saveEnrollmentInteractor";

export const saveEnrollmentController = [
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const enrollmentData = req.body;
      const studentId = req.params.studentId;
      const { data, message } = await saveEnrollmentInteractor(enrollmentData, studentId);
      res.status(201).json({ message, data });
    } catch (error) {
      next(error);
    }
  },
];
