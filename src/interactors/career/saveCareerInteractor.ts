import { Career } from "../../entities/career";
import { gateway } from "../../gateway/basics";
import { InteractorResponseModel } from "../basics";

export interface CareerCreationPayload {
  name: string;
}

export const saveCareerInteractor = async (
  careerCreationPayload: CareerCreationPayload
): Promise<InteractorResponseModel> => {
  const career = buildCareer(careerCreationPayload);
  await gateway.saveCareer(career);
  return {
    data: { careerId: career.id },
    message: "CAREER_SAVED_SUCCESSFULLY",
    success: true,
  };
};

const buildCareer = (careerCreationPayload: CareerCreationPayload): Career => {
  return new Career(careerCreationPayload.name, []);
};
