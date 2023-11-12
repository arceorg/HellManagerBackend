import { Router } from "express";
import { saveStudentController } from "../student/saveStudentController";

export const studentRouter = Router();

studentRouter.put("/", saveStudentController);