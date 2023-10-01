import { unauthorized } from "@hapi/boom";
import { compare, hashSync } from "bcrypt";
import passport from "passport";
import { Strategy } from "passport-local";

export enum AuthStrategy {
  LOCAL_STRATEGY = "local",
}

export const LocalStrategy = new Strategy(
  { usernameField: "email" },
  async (username: string, password: string, done) => {
    try {
      const user = { email: "x", password: hashSync("password", 1) };
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

export const checkAuthWith = (authMethods: AuthStrategy[]) => {
  return passport.authenticate(authMethods, { session: false });
};
