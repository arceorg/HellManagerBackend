import { badRequest } from "@hapi/boom";
import { Student } from "../../entities/student";
import { gateway } from "../../gateway/basics";
import { InteractorResponseModel } from "../basics";
import { StudentCreationPayload } from "./saveStudentInteractor";

interface StudentResponse extends Omit<StudentCreationPayload, "password"> {}

export const getStudentInteractor = async (studentId: string): Promise<InteractorResponseModel> => {
  console.log(studentId)
    const student = await gateway.findStudentById(studentId);
  if (!student) {
    throw badRequest("STUDENT_NOT_FOUND");
  }
  const studentResponse = buildStudentResponse(student);

  return {
    data: studentResponse,
    message: "STUDENT_FOUND_SUCCESSFULLY",
    success: true,
  };
};

const buildStudentResponse = (student: Student): StudentResponse => {
  return {
    firstName: student.user.firstName,
    lastName: student.user.lastName,
    email: student.user.email,
    careerId: student.career.id,
    birthday: student.user.birthday,
    identificationNumber: student.user.identificationNumber,
    phoneNumber: student.user.phoneNumber,
  };
};
