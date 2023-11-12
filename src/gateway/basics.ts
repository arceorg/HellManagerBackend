import { findCareerById, saveCareer } from "./career";
import { findGroupById, saveGroup } from "./group";
import { findScheduleByStudentId, saveSchedule } from "./schedule";
import { saveStudent } from "./student";
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
};
