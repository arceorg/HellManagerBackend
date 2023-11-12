import { badRequest } from "@hapi/boom";
import { gateway } from "../../gateway/basics";
import { InteractorResponseModel } from "../basics";
import { Note } from "../../entities/note";
import { Student } from "../../entities/student";
import { NoteStudent } from "../../entities/noteStudent";

export interface NoteStudentCreationPayload {
  studentId: string;
  noteId: string;
  value: number;
}

export const saveNoteStudentInteractor = async (
  noteStudentCreationPayload: NoteStudentCreationPayload
): Promise<InteractorResponseModel> => {
  const { studentId, noteId } = noteStudentCreationPayload;
  const student = await gateway.findStudentById(studentId);
  if (!student) {
    throw badRequest("STUDENT_NOT_FOUND");
  }

  const note = await gateway.findNoteById(noteId);
  if (!note) {
    throw badRequest("NOTE_NOT_FOUND");
  }

  const noteStudent = buildNoteStudent(noteStudentCreationPayload, note, student);

  await gateway.saveNoteStudent(noteStudent);

  return {
    data: { noteStudentId: noteStudent.id },
    message: "NOTE_STUDENT_SAVED_SUCCESSFULLY",
    success: true,
  };
};

const buildNoteStudent = (
  noteStudentCreationPayload: NoteStudentCreationPayload,
  note: Note,
  student: Student
): NoteStudent => {
  return new NoteStudent(student, note, noteStudentCreationPayload.value);
};
