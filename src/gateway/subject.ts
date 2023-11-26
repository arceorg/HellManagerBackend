import { Subject } from "../entities/subject";
import { AppDataSource } from "./postgres";

export const findSubjectById = async (subjectId: string): Promise<Subject> => {
  return AppDataSource.manager.findOne(Subject, { where: { id: subjectId } });
};

export const saveSubject = async (subject: Subject): Promise<void> => {
  await AppDataSource.manager.save(Subject, subject);
};

export const findSubjectsByCarerId = async (carerId: string): Promise<Subject[]> => {
  const subjects = await AppDataSource.manager.find(Subject, {
    where: { career: { id: carerId } },
    relations: { groups: { subject: true } },
  });
  return subjects;
};
