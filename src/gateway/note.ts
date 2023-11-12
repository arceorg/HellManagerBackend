import { Note } from "../entities/note";
import { AppDataSource } from "./postgres";

export const saveNote = async (note: Note): Promise<void> => {
  await AppDataSource.manager.save(note);
};

export const getNotesByStudentId = async (studentId: string): Promise<Note[]> => {
  const notes = await AppDataSource.manager.find(Note, {
    where: { values: { student: { id: studentId } } },
    relations: { subject: true, values: true },
  });
  return notes;
};
