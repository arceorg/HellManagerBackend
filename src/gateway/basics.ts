import { findCareerById, saveCareer } from "./career";
import { findGroupById, saveGroup } from "./group";
import { getNotesByStudentId, saveNote, findNoteById } from "./note";
import { saveNoteStudent } from "./noteStudent";
import { findScheduleByStudentId, saveSchedule } from "./schedule";
import { findStudentById, saveStudent } from "./student";
import { findSubjectById, saveSubject } from "./subject";
import { findUserByEmail, saveUser } from "./users";

export const gateway = {
  findUserByEmail,
  saveUser,
  findGroupById,
  saveSchedule,
  findSubjectById,
  saveGroup,
  findScheduleByStudentId,
  findCareerById,
  saveStudent,
  saveCareer,
  saveSubject,
  findStudentById,
  saveNote,
  getNotesByStudentId,
  findNoteById,
  saveNoteStudent,
};
