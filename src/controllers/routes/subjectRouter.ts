import { Router } from "express";
import { AuthStrategy, checkAuthWith } from "../../auth/strategies";
import { checkRoles } from "../middlewares/checkRoles";
import { UserRole } from "../../interactors/utils";
import { saveSubjectController } from "../subject/saveSubjectController";

export const subjectRouter = Router();

subjectRouter.put("/", checkAuthWith([AuthStrategy.JWT_STRATEGY]), checkRoles([UserRole.ADMIN]), saveSubjectController);
