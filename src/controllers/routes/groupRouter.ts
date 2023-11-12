import { Router } from "express";
import { AuthStrategy, checkAuthWith } from "../../auth/strategies";
import { saveGroupController } from "../group/saveGroupController";
import { checkRoles } from "../middlewares/checkRoles";
import { UserRole } from "../../interactors/utils";

export const groupRouter = Router();

groupRouter.put("/", checkAuthWith([AuthStrategy.JWT_STRATEGY]), checkRoles([UserRole.ADMIN]), saveGroupController);
