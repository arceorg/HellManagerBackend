import { badRequest } from "@hapi/boom";
import { gateway } from "../../gateway/basics";
import { InteractorResponseModel } from "../basics";

export interface UpdateNoteStudentPayload {
  value: number;
}

export const updateNoteStudentInteractor = async (
  updateNoteStudentPayload: UpdateNoteStudentPayload,
  noteStudentId: string
): Promise<InteractorResponseModel> => {
  const savedNoteStudent = await gateway.findNoteStudentById(noteStudentId);
  if (!savedNoteStudent) {
    throw badRequest("NOTE_NOT_FOUND");
  }
  savedNoteStudent.value = updateNoteStudentPayload.value;

  await gateway.saveNoteStudent(savedNoteStudent);

  return {
    data: { noteStudentId },
    message: "NOTE_STUDENT_UPDATED_SUCCESSFULLY",
    success: true,
  };
};
