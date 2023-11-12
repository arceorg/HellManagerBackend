import { Career } from "../../entities/career";
import { Subject } from "../../entities/subject";
import { gateway } from "../../gateway/basics";
import { InteractorResponseModel } from "../basics";

export enum SubjectType {
  EXTENSION = "EXTENSION",
  NORMAL = "NORMAL",
}

export interface SubjectCreationPayload {
  name: string;
  type: SubjectType;
  code: string;
  careerId: string;
}

export const saveSubjectInteractor = async (
  subjectCreationPayload: SubjectCreationPayload
): Promise<InteractorResponseModel> => {
  const career = await gateway.findCareerById(subjectCreationPayload.careerId);
  const subject = buildSubject(subjectCreationPayload, career);
  await gateway.saveSubject(subject);

  return {
    data: { subjectId: subject.id },
    message: "SUBJECT_SAVED_SUCCESSFULLY",
    success: true,
  };
};

const buildSubject = (subjectCreationPayload: SubjectCreationPayload, career: Career): Subject => {
  return new Subject(
    subjectCreationPayload.name,
    career,
    [],
    subjectCreationPayload.type,
    subjectCreationPayload.code,
    [],
    []
  );
};
