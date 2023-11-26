import { Enrollment } from "../entities/enrollment";
import { AppDataSource } from "./postgres";

export const saveEnrollment = async (enrollment: Enrollment): Promise<void> => {
  await AppDataSource.manager.save(Enrollment, enrollment);
};

export const findEnrollmentsByStudentId = async (studentId: string): Promise<Enrollment[]> => {
  const enrollments = await AppDataSource.manager.find(Enrollment, {
    where: { student: { id: studentId } },
    relations: { subject: true, group: true },
  });
  return enrollments;
};
