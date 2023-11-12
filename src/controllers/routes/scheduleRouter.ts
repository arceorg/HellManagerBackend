import { Router } from "express";
import { AuthStrategy, checkAuthWith } from "../../auth/strategies";
import { saveScheduleController } from "../schedule/saveScheduleController";
import { getScheduleByStudentController } from "../schedule/getScheduleByStudentController";

export const scheduleRouter = Router();

scheduleRouter.put("/", checkAuthWith([AuthStrategy.JWT_STRATEGY]), saveScheduleController);
scheduleRouter.get("/student/:studentId",checkAuthWith([AuthStrategy.JWT_STRATEGY]), getScheduleByStudentController);