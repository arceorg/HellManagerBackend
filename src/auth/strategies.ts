import { unauthorized } from "@hapi/boom";
import { compare } from "bcrypt";
import passport from "passport";
import { ExtractJwt } from "passport-jwt";
import { Strategy as StrategyLocal } from "passport-local";
import { Strategy as StrategyJWT } from "passport-jwt";
import { SECRET_JWT } from "./tokenSign";
import { gateway } from "../gateway/basics";
import { UserRole } from "../interactors/utils";

export enum AuthStrategy {
  LOCAL_STRATEGY = "local",
  JWT_STRATEGY = "jwt",
}

export const LocalStrategy = new StrategyLocal(
  { usernameField: "email" },
  async (email: string, password: string, done) => {
    try {
      const user = await gateway.findUserByEmail(email);
      const isMatch = await compare(password, user.password);
      if (!isMatch) {
        done(unauthorized(), false);
      }

      switch (user.role) {
        case UserRole.STUDENT: {
          const student = await gateway.findStudentByUserId(user.id);
          done(null, { user, student });
          break;
        }

        case UserRole.TEACHER: {
          const teacher = await gateway.findTeacherByUserId(user.id);
          done(null, { teacher, user });
          break;
        }

        case UserRole.ADMIN: {
          const admin = await gateway.findAdminByUserId(user.id);
          done(null, { admin, user });
        }
      }
    } catch (error) {
      done(error, false);
    }
  }
);

export const JwtStrategy = new StrategyJWT(
  {
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: SECRET_JWT,
  },
  (payload: any, done) => {
    return done(null, payload);
  }
);

export const checkAuthWith = (authMethods: AuthStrategy[]) => {
  return passport.authenticate(authMethods, { session: false });
};
