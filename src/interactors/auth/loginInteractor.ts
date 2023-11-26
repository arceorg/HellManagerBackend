import { SECRET_JWT, signToken } from "../../auth/tokenSign";
import { InteractorResponseModel } from "../basics";

export interface UserPayload {
  sub: string;
  role: string;
  studentId: string | null;
  teacherId: string | null;
  adminId: string | null;
}

export const loginInteractor = (data: any): InteractorResponseModel => {
  const payload: UserPayload = {
    sub: data.user.id,
    role: data.user.role,
    studentId: data.student?.id ?? null,
    teacherId: data.teacher?.id ?? null,
    adminId: data.admin?.id ?? null,
  };

  return {
    message: "LOGIN_SUCCESS",
    success: true,
    data: {
      token: signToken(payload, SECRET_JWT),
      ...payload,
    },
  };
};
