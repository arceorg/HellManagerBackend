import { sign } from "jsonwebtoken";

export const SECRET_JWT = process.env.SECRET_JWT ?? "secret";

export const signToken = (payload: any, secret: string): string => {
  return sign(payload, secret);
};
