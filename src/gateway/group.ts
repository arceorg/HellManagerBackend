import { Group } from "../entities/group";
import { AppDataSource } from "./postgres";

export const findGroupById = async (groupId: string): Promise<Group> => {
  const group = await AppDataSource.manager.findOne(Group, { where: { id: groupId } });
  return group;
};

export const saveGroup = async (group: Group): Promise<void> => {
  await AppDataSource.manager.save(Group, group);
};
