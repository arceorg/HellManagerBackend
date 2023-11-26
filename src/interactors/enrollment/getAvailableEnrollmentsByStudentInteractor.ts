import { Schedule } from "../../entities/schedule";
import { Subject } from "../../entities/subject";
import { gateway } from "../../gateway/basics";
import { InteractorResponseModel } from "../basics";
import lodash from "lodash";

export interface ScheduleToEnrollResponse {
  classroom: string;
  from: string;
  to: string;
  day: number;
}

interface SubjectGroupToEnrollResponse {
  groupId: string;
  schedules: ScheduleToEnrollResponse[];
}

interface SubjectToEnrollResponse {
  subjectId: string;
  groups: SubjectGroupToEnrollResponse[];
}

interface AvailableEnrollmentByStudentResponse {
  subjects: SubjectToEnrollResponse[];
}

export const getAvailableEnrollmentsByStudentInteractor = async (
  studentId: string
): Promise<InteractorResponseModel> => {
  const student = await gateway.findStudentById(studentId);
  const subjects = await gateway.findSubjectsByCarerId(student.career.id);
  const groups = lodash.flatten(
    subjects.map((subject) => {
      return subject.groups;
    })
  );
  const uniqueGroups = lodash.uniqBy(groups, (group) => {
    return group.id;
  });
  const groupsIds = uniqueGroups.map((group) => {
    return group.id;
  });
  const schedules = await gateway.findSchedulesByGroupIds(groupsIds);
  const availableEnrollmentsByStudent = buildAvailableEnrollmentsByStudent(subjects, schedules);

  return {
    data: availableEnrollmentsByStudent,
    message: "AVAILABLE_ENROLLMENTS_FETCHED_SUCCESSFULLY",
    success: true,
  };
};

const buildAvailableEnrollmentsByStudent = (
  subjects: Subject[],
  schedules: Schedule[]
): AvailableEnrollmentByStudentResponse => {
  const schedulesPerGroup = lodash.groupBy(schedules, (schedule) => {
    return schedule.group.id;
  });

  return {
    subjects: subjects.map((subject) => {
      return {
        subjectId: subject.id,
        groups: subject.groups.map((group) => {
          return {
            groupId: group.id,
            schedules: schedulesPerGroup[group.id].map(buildScheduleResponse),
          };
        }),
      };
    }),
  };
};

const buildScheduleResponse = (schedule: Schedule): ScheduleToEnrollResponse => {
  return {
    from: schedule.from,
    to: schedule.to,
    day: schedule.day,
    classroom: schedule.classroom,
  };
};
