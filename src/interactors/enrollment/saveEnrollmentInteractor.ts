import { Enrollment } from "../../entities/enrollment";
import { Group } from "../../entities/group";
import { Student } from "../../entities/student";
import { Subject } from "../../entities/subject";
import { gateway } from "../../gateway/basics";
import { InteractorResponseModel } from "../basics";

interface EnrollmentDataRequest {
  subjectId: string;
  groupId: string;
}

export const saveEnrollmentInteractor = async (
  enrollmentData: EnrollmentDataRequest,
  studentId: string
): Promise<InteractorResponseModel> => {
  const subject = await gateway.findSubjectById(enrollmentData.subjectId);
  const group = await gateway.findGroupById(enrollmentData.groupId);
  const student = await gateway.findStudentById(studentId);
  const enrollment = buildEnrollment(subject, group, student);

  await gateway.saveEnrollment(enrollment);

  return {
    success: true,
    message: "ENROLLMENT_SAVED_SUCCESSFULLY",
    data: {
      enrollmentId: enrollment.id,
    },
  };
};

const buildEnrollment = (subject: Subject, group: Group, student: Student): Enrollment => {
  return new Enrollment(subject, student, group);
};
