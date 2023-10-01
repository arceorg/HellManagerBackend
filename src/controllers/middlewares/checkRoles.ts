import { unauthorized } from "@hapi/boom";
import { NextFunction, Request, Response } from "express";

export const checkRoles = (allowedRoles: string[]) => {
  return (req: Request, _res: Response, next: NextFunction) => {
    const user = req.user! as any;
    const role = user.role;
    if (allowedRoles.includes(role)) {
      next();
    } else {
      next(unauthorized());
    }
  };
};
