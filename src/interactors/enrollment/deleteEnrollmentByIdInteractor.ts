import { gateway } from "../../gateway/basics";
import { InteractorResponseModel } from "../basics";

export const deleteEnrollmentByIdInteractor = async (enrollmentId: string): Promise<InteractorResponseModel> => {
  await gateway.deleteEnrollmentById(enrollmentId);
  return {
    success: true,
    message: "ENROLLMENT_DELETED_SUCCESSFULLY",
    data: {
      enrollmentId,
    },
  };
};
