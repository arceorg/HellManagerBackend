import { NoteStudent } from "../entities/noteStudent";
import { AppDataSource } from "./postgres";

export const saveNoteStudent = async (noteStudent: NoteStudent): Promise<void> => {
  await AppDataSource.manager.save(NoteStudent, noteStudent);
};

export const findNoteStudentById = async (noteStudentId: string): Promise<NoteStudent> => {
  const noteStudent = await AppDataSource.manager.findOne(NoteStudent, { where: { id: noteStudentId } });
  return noteStudent;
};
