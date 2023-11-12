import { Student } from "../entities/student";
import { AppDataSource } from "./postgres";

export const saveStudent = async (student: Student): Promise<void> => {
  const entities = [student, student.user];
  await AppDataSource.manager.save(entities);
};
