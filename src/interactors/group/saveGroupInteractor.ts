import { Group } from "../../entities/group";
import { Subject } from "../../entities/subject";
import { gateway } from "../../gateway/basics";
import { InteractorResponseModel } from "../basics";

export interface GroupCreationPayload {
  maxAllowedStudents: number;
  subjectId: string;
}

export const saveGroupInteractor = async (
  groupCreationPayload: GroupCreationPayload
): Promise<InteractorResponseModel> => {
  const subject = await gateway.findSubjectById(groupCreationPayload.subjectId);
  const group = buildGroup(groupCreationPayload, subject);
  await gateway.saveGroup(group);

  return {
    data: { groupId: group.id },
    message: "GROUP_CREATED_SUCCESSFULLY",
    success: true,
  };
};

const buildGroup = (groupCreationPayload: GroupCreationPayload, subject: Subject): Group => {
  const group = new Group(subject, groupCreationPayload.maxAllowedStudents, [], []);
  return group;
};
