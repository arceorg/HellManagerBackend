import { Note } from "../../entities/note";
import { NoteStudent } from "../../entities/noteStudent";
import { gateway } from "../../gateway/basics";
import lodash from "lodash";
import { InteractorResponseModel } from "../basics";

export interface NoteSubject {
  value: number;
  percentage: number;
}

export interface NotePerSubject {
  notes: NoteSubject[];
  subjectId: string;
  subjectName: string;
}

export interface StudentNotesResponse {
  notesPerSubject: NotePerSubject[];
}

export const getStudentNotesInteractor = async (studentId: string): Promise<InteractorResponseModel> => {
  const studentNotes = await gateway.findNotesByStudentId(studentId);
  const studentNotesResponse = buildStudentNotesResponse(studentNotes);

  return {
    data: studentNotesResponse,
    message: "NOTES_FETCHED_SUCCESSFULLY",
    success: true,
  };
};

const buildStudentNotesResponse = (notes: Note[]): StudentNotesResponse => {
  const notesPerSubject = lodash.groupBy(notes, (note) => {
    return note.subject.id;
  });
  return {
    notesPerSubject: Object.keys(notesPerSubject).map((subjectId) => {
      return {
        subjectId,
        subjectName: notesPerSubject[subjectId][0].subject.name,
        notes: lodash.flatten(
          notesPerSubject[subjectId].map((note) => {
            return note.values.map((studentNote: NoteStudent): NoteSubject => {
              return {
                value: studentNote.value,
                percentage: note.percentage,
              };
            });
          })
        ),
      };
    }),
  };
};
