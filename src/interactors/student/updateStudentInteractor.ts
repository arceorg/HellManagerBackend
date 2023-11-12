import { badRequest } from "@hapi/boom";
import { Career } from "../../entities/career";
import { Student } from "../../entities/student";
import { gateway } from "../../gateway/basics";
import { InteractorResponseModel } from "../basics";
import { UserCreationPayload, UserRole, buildUser } from "../utils";
import { StudentCreationPayload } from "./saveStudentInteractor";

export interface StudentUpdatePayload extends Omit<StudentCreationPayload, "password"> {
  password?: string;
}

export const updateStudentInteractor = async (
  studentCreationPayload: StudentCreationPayload,
  studentId: string
): Promise<InteractorResponseModel> => {
  const { password } = studentCreationPayload;
  const career = await gateway.findCareerById(studentCreationPayload.careerId);

  if (!studentId) {
    throw badRequest("ID_NOT_PROVIDED");
  }

  const savedStudent = await gateway.findStudentById(studentId);
  if (!savedStudent) {
    throw badRequest("STUDENT_NOT_FOUND");
  }

  const student = buildStudent(studentCreationPayload, career);
  student.id = savedStudent.id;
  student.user.id = savedStudent.user.id;

  if (!password) {
    student.user.password = savedStudent.user.password;
  }

  await gateway.saveStudent(student);

  return {
    data: { studentId: student.id },
    message: "STUDENT_UPDATED_SUCCESSFULLY",
    success: true,
  };
};

const buildStudent = (studentCreationPayload: StudentCreationPayload, career: Career): Student => {
  const user = buildUser(studentCreationPayload as UserCreationPayload, UserRole.STUDENT);
  const student = new Student(user, career, [], []);
  return student;
};
