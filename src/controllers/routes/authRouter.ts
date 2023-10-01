import { Router } from "express";
import { loginController } from "../auth/loginController";
import { AuthStrategy, checkAuthWith } from "../../auth/strategies";

export const authRouter = Router();

authRouter.post("/login", checkAuthWith([AuthStrategy.LOCAL_STRATEGY]), loginController);
