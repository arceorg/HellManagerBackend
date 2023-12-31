import { Student } from "../entities/student";
import { AppDataSource } from "./postgres";

export const saveStudent = async (student: Student): Promise<void> => {
  const entities = [student, student.user];
  await AppDataSource.manager.save(entities);
};

export const findStudentById = async (studentId: string): Promise<Student> => {
  return AppDataSource.manager.findOne(Student, { where: { id: studentId }, relations: { user: true, career: true } });
};

export const findStudentByUserId = async (userId: string): Promise<Student> => {
  const student = await AppDataSource.manager.findOne(Student, { where: { user: { id: userId } } });
  return student;
};
