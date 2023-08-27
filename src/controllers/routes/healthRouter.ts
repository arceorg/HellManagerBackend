import { Request, Response, Router } from "express";

export const healthRouter = Router();

healthRouter.get("/", (_req: Request, res: Response) => {
  res.status(200).json({ message: "App is healthy!", success: true });
});
