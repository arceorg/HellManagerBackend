import { Administrator } from "../entities/administrator";
import { AppDataSource } from "./postgres";

export const findAdminByUserId = async (userId: string): Promise<Administrator> => {
  const admin = await AppDataSource.manager.findOne(Administrator, { where: { user: { id: userId } } });
  return admin;
};
