import { Subject } from "../entities/subject";
import { AppDataSource } from "./postgres";

export const findSubjectById = async (subjectId: string): Promise<Subject> => {
  return AppDataSource.manager.findOne(Subject, { where: { id: subjectId } });
};

export const saveSubject = async (subject: Subject): Promise<void> => {
  await AppDataSource.manager.save(Subject, subject);
};
