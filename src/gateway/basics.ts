import { findCareerById, saveCareer } from "./career";
import { saveEnrollment, findEnrollmentsByStudentId } from "./enrollment";
import { findGroupById, saveGroup } from "./group";
import { findNotesByStudentId, saveNote, findNoteById } from "./note";
import { saveNoteStudent, findNoteStudentById } from "./noteStudent";
import { findScheduleByStudentId, saveSchedule, findSchedulesByGroupIds } from "./schedule";
import { findStudentById, saveStudent } from "./student";
import { findSubjectById, saveSubject, findSubjectsByCarerId } from "./subject";
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
  findNotesByStudentId,
  findNoteById,
  saveNoteStudent,
  findNoteStudentById,
  findSubjectsByCarerId,
  findSchedulesByGroupIds,
  saveEnrollment,
  findEnrollmentsByStudentId,
};
