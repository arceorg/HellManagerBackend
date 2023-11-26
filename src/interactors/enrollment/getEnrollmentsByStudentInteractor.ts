import { Enrollment } from "../../entities/enrollment";
import { gateway } from "../../gateway/basics";
import { InteractorResponseModel } from "../basics";

interface EnrollmentResponse {
  subjectId: string;
  subjectName: string;
  groupId: string;
  id: string;
}

interface StudentEnrollmentsResponse {
  enrollments: EnrollmentResponse[];
}

export const getEnrollmentsByStudentInteractor = async (studentId: string): Promise<InteractorResponseModel> => {
  const enrollments = await gateway.findEnrollmentsByStudentId(studentId);
  return {
    success: true,
    data: buildEnrollmentsByStudentResponse(enrollments),
    message: "ENROLLMENTS_FETCHED_SUCCESSFULLY",
  };
};

const buildEnrollmentsByStudentResponse = (studentEnrollments: Enrollment[]): StudentEnrollmentsResponse => {
  return {
    enrollments: studentEnrollments.map((enrollment) => {
      return {
        id: enrollment.id,
        subjectId: enrollment.subject.id,
        groupId: enrollment.group.id,
        subjectName: enrollment.subject.name,
      };
    }),
  };
};
