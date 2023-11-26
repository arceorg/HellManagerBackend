import { Router } from "express";
import { AuthStrategy, checkAuthWith } from "../../auth/strategies";
import { saveSubjectController } from "../subject/saveSubjectController";

export const subjectRouter = Router();

subjectRouter.put("/", checkAuthWith([AuthStrategy.JWT_STRATEGY]), saveSubjectController);
