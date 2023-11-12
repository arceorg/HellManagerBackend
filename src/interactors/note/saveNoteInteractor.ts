import { badRequest } from "@hapi/boom";
import { gateway } from "../../gateway/basics";
import { InteractorResponseModel } from "../basics";
import { Note } from "../../entities/note";
import { Subject } from "../../entities/subject";

export interface NoteCreationPayload {
  percentage: number;
  subjectId: string;
}

export const saveNoteInteractor = async (
  noteCreationPayload: NoteCreationPayload
): Promise<InteractorResponseModel> => {
  const subject = await gateway.findSubjectById(noteCreationPayload.subjectId);
  if (!subject) {
    throw badRequest("SUBJECT_NOT_FOUND");
  }
  const note = buildNote(noteCreationPayload, subject);
  await gateway.saveNote(note);

  return {
    data: { noteId: note.id },
    message: "NOTE_SAVED_SUCCESSFULLY",
    success: true,
  };
};

const buildNote = (noteCreationPayload: NoteCreationPayload, subject: Subject): Note => {
  return new Note(subject, noteCreationPayload.percentage);
};
