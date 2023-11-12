import { NoteStudent } from "../entities/noteStudent";
import { AppDataSource } from "./postgres";

export const saveNoteStudent = async (noteStudent: NoteStudent): Promise<void> => {
  await AppDataSource.manager.save(NoteStudent, noteStudent);
};
