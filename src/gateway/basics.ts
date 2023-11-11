import { findGroupById, saveGroup } from "./group";
import { saveSchedule } from "./schedule";
import { findSubjectById } from "./subject";
import { findUserByEmail, saveUser } from "./users";

export const gateway = {
  findUserByEmail,
  saveUser,
  findGroupById,
  saveSchedule,
  findSubjectById,
  saveGroup,
};
