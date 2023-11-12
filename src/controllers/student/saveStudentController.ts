import { NextFunction, Request, Response } from "express";
import { saveStudentInteractor } from "../../interactors/student/saveStudentInteractor";

export const saveStudentController = [
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { data, message } = await saveStudentInteractor(req.body);
      res.status(201).send({ data, message });
    } catch (error) {
      next(error);
    }
  },
];
