import { verify } from "jsonwebtoken";

export const verifyToken = (token: any, secret: string) => {
    return verify(token, secret);
}
