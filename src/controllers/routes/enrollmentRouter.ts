import { Router } from "express";
import { AuthStrategy, checkAuthWith } from "../../auth/strategies";
import { getAvailableEnrollmentsByStudentController } from "../enrolment/getAvailableEnrollmentsByStudentController";
import { saveEnrollmentController } from "../enrolment/saveEnrollmentController";
import { getEnrollmentsByStudentController } from "../enrolment/getEnrollmentsByStudentController";
import { deleteEnrollmentByIdController } from "../enrolment/deleteEnrollmentByIdController";

export const enrollmentRouter = Router();

enrollmentRouter.get(
  "/students/:studentId",
  checkAuthWith([AuthStrategy.JWT_STRATEGY]),
  getEnrollmentsByStudentController
);
enrollmentRouter.put("/students/:studentId", checkAuthWith([AuthStrategy.JWT_STRATEGY]), saveEnrollmentController);
enrollmentRouter.get(
  "/students/available-enrollments/:studentId",
  checkAuthWith([AuthStrategy.JWT_STRATEGY]),
  getAvailableEnrollmentsByStudentController
);
enrollmentRouter.delete("/:enrollmentId", checkAuthWith([AuthStrategy.JWT_STRATEGY]), deleteEnrollmentByIdController);
