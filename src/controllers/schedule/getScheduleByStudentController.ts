import { NextFunction, Request, Response } from "express";
import { getScheduleByStudentInteractor } from "../../interactors/schedule/getScheduleByStudentInteractor";

export const getScheduleByStudentController = [
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const studentId = req.params.studentId;
      const { message, data } = await getScheduleByStudentInteractor(studentId);
      res.status(200).json({
        message,
        data,
      });
    } catch (error) {
      next(error);
    }
  },
];
