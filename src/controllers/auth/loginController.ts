import { NextFunction, Request, Response } from "express";
import { loginInteractor } from "../../interactors/auth/loginInteractor";

export const loginController = [
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const user = req.user;
      const { data, message } = loginInteractor(user);
      res.json({ message, ...data });
    } catch (error) {
      next(error);
    }
  },
];
