import { unauthorized } from "@hapi/boom";
import { compare, hashSync } from "bcrypt";
import passport from "passport";
import { ExtractJwt } from "passport-jwt";
import { Strategy as StrategyLocal } from "passport-local";
import { Strategy as StrategyJWT } from "passport-jwt";
import { SECRET_JWT } from "./tokenSign";

export enum AuthStrategy {
  LOCAL_STRATEGY = "local",
  JWT_STRATEGY = "jwt",
}

export const LocalStrategy = new StrategyLocal(
  { usernameField: "email" },
  async (email: string, password: string, done) => {
    try {
      const user = { email, password: hashSync(password, 1), role: "test", id: "test" };
      const isMatch = await compare(password, user.password);
      if (!isMatch) {
        done(unauthorized(), false);
      }
      done(null, user);
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
  (payloadL: any, done) => {
    return done(null, payloadL);
  }
);

export const checkAuthWith = (authMethods: AuthStrategy[]) => {
  return passport.authenticate(authMethods, { session: false });
};
