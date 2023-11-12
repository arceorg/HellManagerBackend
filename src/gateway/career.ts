import { Career } from "../entities/career";
import { AppDataSource } from "./postgres";

export const findCareerById = async (careerId: string): Promise<Career> => {
  const career = await AppDataSource.manager.findOne(Career, { where: { id: careerId } });
  return career;
};
