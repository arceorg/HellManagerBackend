import { Router } from "express";
import { saveStudentController } from "../student/saveStudentController";
import { AuthStrategy, checkAuthWith } from "../../auth/strategies";
import { updateStudentController } from "../student/updateStudentController";
import { getStudentController } from "../student/getStudentController";

export const studentRouter = Router();

studentRouter.put("/", saveStudentController);
studentRouter.post("/:studentId", checkAuthWith([AuthStrategy.JWT_STRATEGY]), updateStudentController);
studentRouter.get("/:studentId", checkAuthWith([AuthStrategy.JWT_STRATEGY]), getStudentController);
