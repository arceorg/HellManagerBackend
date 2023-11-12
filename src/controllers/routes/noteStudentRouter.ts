import { Router } from "express";
import { AuthStrategy, checkAuthWith } from "../../auth/strategies";
import { saveNoteStudentController } from "../noteStudent/saveNoteStudentController";
import { updateNoteStudentController } from "../noteStudent/updateNoteStudentController";
import { getStudentNotesController } from "../noteStudent/getStudentNotesController";

export const noteStudentRouter = Router();

noteStudentRouter.put("/", checkAuthWith([AuthStrategy.JWT_STRATEGY]), saveNoteStudentController);
noteStudentRouter.post("/:noteStudentId", checkAuthWith([AuthStrategy.JWT_STRATEGY]), updateNoteStudentController);
noteStudentRouter.get("/student/:studentId", checkAuthWith([AuthStrategy.JWT_STRATEGY]), getStudentNotesController);
