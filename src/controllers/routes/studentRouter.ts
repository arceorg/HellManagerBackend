import { Router } from "express";
import { saveStudentController } from "../student/saveStudentController";
import { AuthStrategy, checkAuthWith } from "../../auth/strategies";
import { updateStudentController } from "../student/updateStudentController";

export const studentRouter = Router();

studentRouter.put("/", saveStudentController);
studentRouter.post("/", checkAuthWith([AuthStrategy.JWT_STRATEGY]), updateStudentController)
