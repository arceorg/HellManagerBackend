import { unauthorized } from "@hapi/boom";
import { compare } from "bcrypt";
import passport from "passport";
import { Strategy } from "passport-local";

export enum AuthStrategy {
  LOCAL_STRATEGY = "local",
}

export const LocalStrategy = new Strategy(async (username: string, password: string, done) => {
  try {
    const user = { email: "x", password: "password" };
    const isMatch = await compare(password, user.password);
    if (!isMatch) {
      done(unauthorized(), false);
    }
    done(null, user);
  } catch (error) {
    done(error, false);
  }
});

export const checkAuthWith = (authMethods: AuthStrategy[]) => {
  return passport.authenticate(authMethods, { session: false });
};
