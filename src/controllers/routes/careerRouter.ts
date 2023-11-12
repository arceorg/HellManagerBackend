import { Router } from "express";
import { AuthStrategy, checkAuthWith } from "../../auth/strategies";
import { saveCareerController } from "../career/saveCareer";

export const careerRouter = Router();

careerRouter.put("/", checkAuthWith([AuthStrategy.JWT_STRATEGY]), saveCareerController);
