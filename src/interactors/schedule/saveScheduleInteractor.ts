import { Group } from "../../entities/group";
import { Schedule } from "../../entities/schedule";
import { gateway } from "../../gateway/basics";
import { InteractorResponseModel } from "../basics";

export interface ScheduleCreationPayload {
  classroom: string;
  from: string;
  to: string;
  day: number;
  groupId: string;
}

export const saveScheduleInteractor = async (
  scheduleCreationPayload: ScheduleCreationPayload
): Promise<InteractorResponseModel> => {
  const group = await gateway.findGroupById(scheduleCreationPayload.groupId);
  const schedule = buildScheduleEntity(scheduleCreationPayload, group);
  await gateway.saveSchedule(schedule);

  return {
    message: "SCHEDULE_SAVED_SUCCESSFULLY",
    data: {
      scheduleId: schedule.id,
    },
    success: true,
  };
};

const buildScheduleEntity = (scheduleCreationPayload: ScheduleCreationPayload, group: Group): Schedule => {
  return new Schedule(
    group,
    scheduleCreationPayload.classroom,
    scheduleCreationPayload.from,
    scheduleCreationPayload.to,
    scheduleCreationPayload.day
  );
};
