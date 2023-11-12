import { Router } from "express";
import { AuthStrategy, checkAuthWith } from "../../auth/strategies";
import { saveNoteStudentController } from "../noteStudent/saveNoteStudentController";

export const noteStudentRouter = Router();

noteStudentRouter.put("/", checkAuthWith([AuthStrategy.JWT_STRATEGY]), saveNoteStudentController);
