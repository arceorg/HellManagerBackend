import { Router } from "express";
import { AuthStrategy, checkAuthWith } from "../../auth/strategies";
import { saveGroupController } from "../group/saveGroupController";

export const groupRouter = Router();

groupRouter.put("/", checkAuthWith([AuthStrategy.JWT_STRATEGY]), saveGroupController);
