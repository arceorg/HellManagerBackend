import { SECRET_JWT, signToken } from "../../auth/tokenSign";
import { InteractorResponseModel } from "../basics";

export interface UserPayload {
    sub: string;
    role: string;
}

export const loginInteractor = (user:any): InteractorResponseModel=>{
    const payload: UserPayload = {
        sub: user.id,
        role: user.role
    }

    return {
        message: "LOGIN_SUCCESS",
        success: true,
        data: {
            token: signToken(payload, SECRET_JWT)
        }
    }
}