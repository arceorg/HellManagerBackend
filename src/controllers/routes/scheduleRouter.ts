import { Router } from "express";
import { AuthStrategy, checkAuthWith } from "../../auth/strategies";
import { saveScheduleController } from "../schedule/saveScheduleController";
import { getScheduleByStudentController } from "../schedule/getScheduleByStudentController";
import { checkRoles } from "../middlewares/checkRoles";
import { UserRole } from "../../interactors/utils";

export const scheduleRouter = Router();

scheduleRouter.put(
  "/",
  checkAuthWith([AuthStrategy.JWT_STRATEGY]),
  checkRoles([UserRole.ADMIN]),
  saveScheduleController
);
scheduleRouter.get("/student/:studentId", checkAuthWith([AuthStrategy.JWT_STRATEGY]), getScheduleByStudentController);
