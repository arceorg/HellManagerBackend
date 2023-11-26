import { NextFunction, Request, Response } from "express";
import { deleteEnrollmentByIdInteractor } from "../../interactors/enrollment/deleteEnrollmentByIdInteractor";

export const deleteEnrollmentByIdController = [
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const enrollmentId = req.params.enrollmentId;
      const { message, data } = await deleteEnrollmentByIdInteractor(enrollmentId);
      res.status(200).json({ message, data });
    } catch (error) {
      next(error);
    }
  },
];
