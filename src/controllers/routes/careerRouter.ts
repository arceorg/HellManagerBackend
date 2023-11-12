import { Router } from "express";
import { AuthStrategy, checkAuthWith } from "../../auth/strategies";
import { saveCareerController } from "../career/saveCareer";
import { checkRoles } from "../middlewares/checkRoles";
import { UserRole } from "../../interactors/utils";

export const careerRouter = Router();

careerRouter.put("/", checkAuthWith([AuthStrategy.JWT_STRATEGY]), checkRoles([UserRole.ADMIN]), saveCareerController);
