import { In } from "typeorm";
import { Enrollment } from "../entities/enrollment";
import { Schedule } from "../entities/schedule";
import { AppDataSource } from "./postgres";

export const saveSchedule = async (schedule: Schedule): Promise<void> => {
  await AppDataSource.manager.save(Schedule, schedule);
};

export const findSchedulesByGroupIds = async (groupIds: string[]): Promise<Schedule[]> => {
  const schedules = await AppDataSource.manager.find(Schedule, {
    where: { group: { id: In(groupIds) } },
    relations: { group: true },
  });
  return schedules;
};

export const findScheduleByStudentId = async (studentId: string): Promise<Schedule[]> => {
  const enrollments = await AppDataSource.manager.find(Enrollment, {
    where: { student: { id: studentId } },
    relations: { group: true },
  });
  const schedules: Schedule[] = [];
  for (const enrollment of enrollments) {
    const schedule = await AppDataSource.manager.findOne(Schedule, {
      where: { group: { id: enrollment.group.id } },
      relations: { group: { subject: true } },
    });
    schedules.push(schedule);
  }

  return schedules;
};
