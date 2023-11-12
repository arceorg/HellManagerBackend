import { Enrollment } from "../entities/enrollment";
import { Schedule } from "../entities/schedule";
import { AppDataSource } from "./postgres";

export const saveSchedule = async (schedule: Schedule): Promise<void> => {
  await AppDataSource.manager.save(Schedule, schedule);
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
      relations: { group: true },
    });
    schedules.push(schedule);
  }

  return schedules;
};
