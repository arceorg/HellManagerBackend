import { Router } from "express";
import { AuthStrategy, checkAuthWith } from "../../auth/strategies";
import { getAvailableEnrollmentsByStudentController } from "../enrolment/getAvailableEnrollmentsByStudentController";

export const enrolmentRouter = Router();

enrolmentRouter.get("/students/:studentId", checkAuthWith([AuthStrategy.JWT_STRATEGY]));
enrolmentRouter.put("/students/:studentId", checkAuthWith([AuthStrategy.JWT_STRATEGY]));
enrolmentRouter.put(
  "/students/available-enrollments/:studentId",
  checkAuthWith([AuthStrategy.JWT_STRATEGY]),
  getAvailableEnrollmentsByStudentController
);
enrolmentRouter.delete("/:enrolmentId", checkAuthWith([AuthStrategy.JWT_STRATEGY]));
