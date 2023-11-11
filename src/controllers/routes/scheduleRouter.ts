import { Router } from "express";
import { AuthStrategy, checkAuthWith } from "../../auth/strategies";
import { saveScheduleController } from "../schedule/saveScheduleController";

export const scheduleRouter = Router();

scheduleRouter.put("/", checkAuthWith([AuthStrategy.JWT_STRATEGY]), saveScheduleController);
