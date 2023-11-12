import { Career } from "../../entities/career";
import { Student } from "../../entities/student";
import { gateway } from "../../gateway/basics";
import { InteractorResponseModel } from "../basics";
import { UserCreationPayload, UserRole, buildUser } from "../utils";

export interface StudentCreationPayload extends UserCreationPayload {
  careerId: string;
}

export const saveStudentInteractor = async (
  studentCreationPayload: StudentCreationPayload
): Promise<InteractorResponseModel> => {
  const career = await gateway.findCareerById(studentCreationPayload.careerId);
  const student = buildStudent(studentCreationPayload, career);
  await gateway.saveStudent(student);

  return {
    data: { studentId: student.id },
    message: "STUDENT_SAVED_SUCCESSFULLY",
    success: true,
  };
};

const buildStudent = (studentCreationPayload: StudentCreationPayload, career: Career): Student => {
  const user = buildUser(studentCreationPayload as UserCreationPayload, UserRole.STUDENT);
  const student = new Student(user, career, [], []);
  return student;
};
