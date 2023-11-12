import { User } from "../entities/user";
import { hashSync } from "bcrypt";

export enum UserRole {
  ADMIN = "ADMIN",
  STUDENT = "STUDENT",
  TEACHER = "TEACHER",
}

export interface UserCreationPayload {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  birthday: Date;
  identificationNumber: string;
  phoneNumber: string;
}

export const buildUser = (userCreationPayload: UserCreationPayload, role: UserRole): User => {
  const user = new User(
    userCreationPayload.firstName,
    userCreationPayload.lastName,
    userCreationPayload.email,
    hashSync(userCreationPayload.password, 1),
    role,
    userCreationPayload.birthday,
    userCreationPayload.identificationNumber,
    userCreationPayload.phoneNumber
  );
  return user;
};
