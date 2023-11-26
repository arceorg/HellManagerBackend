import { Teacher } from "../entities/teacher";
import { AppDataSource } from "./postgres";

export const findTeacherByUserId = async (userId: string): Promise<Teacher> => {
  const teacher = await AppDataSource.manager.findOne(Teacher, { where: { user: { id: userId } } });
  return teacher;
};
