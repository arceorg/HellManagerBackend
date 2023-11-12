import { Schedule } from "../../entities/schedule";
import { gateway } from "../../gateway/basics";
import { InteractorResponseModel } from "../basics";

export interface SchedulePerDay {
  id: string;
  classroom: string;
  from: string;
  to: string;
  day: number;
  groupId: string;
}

export interface GetScheduleResponse {
  schedule: SchedulePerDay[];
}

export const getScheduleByStudentInteractor = async (studentId: string): Promise<InteractorResponseModel> => {
  const schedules = await gateway.findScheduleByStudentId(studentId);
  const schedulesResponse = buildScheduleResponse(schedules);
  return {
    message: "SCHEDULE_BY_STUDENT_FETCHED_SUCCESSFULLY",
    data: schedulesResponse,
    success: true,
  };
};

const buildScheduleResponse = (schedules: Schedule[]): GetScheduleResponse => {
  return {
    schedule: schedules.map((schedule) => {
      return {
        id: schedule.id,
        classroom: schedule.classroom,
        from: schedule.from,
        to: schedule.to,
        day: schedule.day,
        groupId: schedule.group.id,
      };
    }),
  };
};
