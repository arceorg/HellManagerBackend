import { Schedule } from "../entities/schedule";
import { AppDataSource } from "./postgres";

export const saveSchedule = async (schedule: Schedule): Promise<void> => {
  await AppDataSource.manager.save(Schedule, schedule);
};
